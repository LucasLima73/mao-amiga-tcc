import { OpenAI } from 'openai'
import { Pinecone } from '@pinecone-database/pinecone'

const PINECONE_INDEX_NAME = 'tcc'

// Inicializar cliente Pinecone
const pinecone = new Pinecone()

;(async () => {
  try {
    console.log('Inicializando cliente Pinecone...')
    await pinecone.init({
      apiKey:
        'pcsk_i8ZcX_GWGdc93Fa2tgn44kHTzV5iLbBbPK2PzJV3EGzZbY816LRsqdnoueGsGKbzQViJR',
    })
    console.log('Cliente Pinecone inicializado com sucesso.')
  } catch (error) {
    console.error('Erro ao inicializar Pinecone:', error)
  }
})()

// Configurar cliente OpenAI
const openai = new OpenAI({
  apiKey:
    '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',
})

export async function POST(req) {
  try {
    const body = await req.json()
    const { question } = body

    if (!question) {
      return new Response(JSON.stringify({ error: 'No question provided' }), {
        status: 400,
      })
    }

    console.log('Gerando embedding para a pergunta...')
    const embeddingResponse = await openai.embeddings.create({
      model: 'text-embedding-ada-002',
      input: question,
    })

    const questionEmbedding = embeddingResponse.data[0].embedding

    console.log('Buscando resultados no Pinecone...')
    const index = pinecone.Index(PINECONE_INDEX_NAME)
    const pineconeResponse = await index.query({
      topK: 3,
      includeMetadata: true,
      vector: questionEmbedding,
    })

    const matches = pineconeResponse.matches

    if (!matches || matches.length === 0) {
      console.warn('Nenhuma informação relevante encontrada.')
      return new Response(
        JSON.stringify({
          answer: 'Nenhuma informação relevante encontrada no banco de dados.',
        }),
        { status: 404 }
      )
    }

    const context = matches
      .map((match) => match.metadata?.text || '')
      .join('\n\n')

    console.log('Gerando resposta baseada no contexto...')
    const chatResponse = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            'Você é um assistente que responde perguntas com base no contexto fornecido.',
        },
        {
          role: 'user',
          content: `Contexto: ${context}\n\nPergunta: ${question}`,
        },
      ],
    })

    const answer =
      chatResponse.choices[0]?.message.content ||
      'Não foi possível gerar uma resposta.'

    console.log('Resposta gerada com sucesso.')
    return new Response(JSON.stringify({ answer }), { status: 200 })
  } catch (error) {
    console.error('Erro ao processar pergunta:', error)
    return new Response(
      JSON.stringify({ error: 'Erro interno do servidor.' }),
      { status: 500 }
    )
  }
}
