const { addDocumentWithEmbedding } = require("../shared/services/addDocumentWithEmbedding");
const documents = require("../shared/documents/saude.json");

const uploadDocuments = async () => {
  for (const doc of documents) {
    const { title, content, tags } = doc;
    try {
      await addDocumentWithEmbedding(title, content, tags);
      console.log(`Documento "${title}" adicionado com sucesso.`);
    } catch (error) {
      console.error(`Erro ao adicionar documento "${title}":`, error);
    }
  }
};

uploadDocuments();
