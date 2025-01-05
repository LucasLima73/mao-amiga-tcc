import { createEmbedding } from "./openAiConfig"; // Função para criar embeddings com OpenAI
import { queryVectors } from "./pineconeConfig";  // Função para buscar documentos no Pinecone
import { openai } from "./openAiConfig";         // Cliente OpenAI para gerar respostas

/**
 * Realiza uma consulta no sistema RAG.
 * @param question Pergunta feita pelo usuário.
 * @returns Resposta gerada pelo GPT.
 */
export const queryDocumentation = async (question) => {
  try {
    // Passo 1: Criar o embedding da pergunta
    const queryEmbedding = await createEmbedding(question);

    // Passo 2: Buscar os documentos mais relevantes no Pinecone
    const relevantDocs = await queryVectors(queryEmbedding, 5); // Retorna os 5 documentos mais relevantes

    if (!relevantDocs.length) {
      return "Nenhuma informação relevante foi encontrada na documentação.";
    }

    // Passo 3: Construir o contexto com os documentos recuperados
    const context = relevantDocs
      .map((doc) => `Título: ${doc.title}\nConteúdo: ${doc.content}`)
      .join("\n\n");

    // Passo 4: Enviar a pergunta e o contexto para o GPT
    const response = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [
        { role: "system", content: "Você é um assistente que responde perguntas com base na documentação fornecida." },
        { role: "user", content: `Baseado nos documentos abaixo, responda a seguinte pergunta:\n\nDocumentos:\n${context}\n\nPergunta: ${question}` },
      ],
    });

    // Retornar a resposta gerada
    return response.data.choices[0]?.message?.content || "Não foi possível gerar uma resposta.";
  } catch (error) {
    console.error("Erro na consulta à documentação:", error);
    return "Ocorreu um erro ao processar sua pergunta.";
  }
};
