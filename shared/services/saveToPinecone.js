import { initPinecone } from "./pineconeConfig";

export const saveToPinecone = async (id, embedding, metadata) => {
  try {
    const index = await initPinecone();
    await index.upsert({
      upsertRequest: {
        vectors: [
          {
            id,
            values: embedding,
            metadata,
          },
        ],
      },
    });
    console.log(`Documento ${id} salvo no Pinecone.`);
  } catch (error) {
    console.error("Erro ao salvar no Pinecone:", error);
    throw error;
  }
};
