import { initPinecone } from "./pineconeConfig";

export const searchInPinecone = async (embedding, topK = 5) => {
  try {
    const index = await initPinecone();
    const response = await index.query({
      queryRequest: {
        vector: embedding,
        topK,
        includeMetadata: true,
      },
    });
    return response.matches.map((match) => match.metadata);
  } catch (error) {
    console.error("Erro ao buscar no Pinecone:", error);
    throw error;
  }
};
