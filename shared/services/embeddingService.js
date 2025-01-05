import * as use from "@tensorflow-models/universal-sentence-encoder";

let model = null;

export const generateEmbedding = async (content) => {
  if (!model) {
    model = await use.load(); // Carrega o modelo Universal Sentence Encoder
  }
  const embeddings = await model.embed([content]);
  return embeddings.arraySync()[0];
};
