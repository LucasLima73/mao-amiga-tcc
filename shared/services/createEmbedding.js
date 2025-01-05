import { openai } from "./openAiConfig"; // Configuração da OpenAI

export const createEmbedding = async (content) => {
  try {
    const response = await openai.createEmbedding({
      model: "text-embedding-ada-002", // Modelo para gerar embeddings
      input: content,
    });

    return response.data.data[0].embedding;
  } catch (error) {
    console.error("Erro ao criar embedding:", error);
    throw new Error("Falha ao gerar embedding.");
  }
};
