import { PineconeClient } from '@pinecone-database/pinecone';
import { Configuration, OpenAIApi } from 'openai';

const PINECONE_INDEX_NAME = 'tcc';

// Inicializar clientes
const pinecone = new PineconeClient();
await pinecone.init({
  apiKey: process.env.PINECONE_API_KEY || '',
});

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY || '',
  })
);

export async function POST(req) {
  try {
    const body = await req.json();
    const { question } = body;

    if (!question) {
      return new Response(
        JSON.stringify({ error: 'No question provided' }),
        { status: 400 }
      );
    }

    // Gerar embedding para a pergunta
    const embeddingResponse = await openai.createEmbedding({
      model: 'text-embedding-ada-002',
      input: question,
    });

    const questionEmbedding = embeddingResponse.data.data[0].embedding;

    // Buscar no Pinecone
    const index = pinecone.Index(PINECONE_INDEX_NAME);
    const pineconeResponse = await index.query({
      topK: 3,
      includeMetadata: true,
      vector: questionEmbedding,
    });

    const matches = pineconeResponse.matches;

    if (!matches || matches.length === 0) {
      return new Response(
        JSON.stringify({
          answer: 'Nenhuma informação relevante encontrada no banco de dados.',
        }),
        { status: 404 }
      );
    }

    const context = matches
      .map((match) => match.metadata?.text || '')
      .join('\n\n');

    const chatResponse = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            'Você é um assistente que responde perguntas com base no contexto fornecido.',
        },
        { role: 'user', content: `Contexto: ${context}\n\nPergunta: ${question}` },
      ],
    });

    const answer =
      chatResponse.data.choices[0]?.message?.content ||
      'Não foi possível gerar uma resposta.';

    return new Response(JSON.stringify({ answer }), { status: 200 });
  } catch (error) {
    console.error('Erro ao processar pergunta:', error);
    return new Response(
      JSON.stringify({ error: 'Erro interno do servidor.' }),
      { status: 500 }
    );
  }
}
