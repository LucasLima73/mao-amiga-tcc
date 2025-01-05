import { collection, addDoc } from "firebase/firestore";
const { db } = require("../../firebase/firebaseapi") // Configuração do Firebase
const { createEmbedding } = require("./openAiConfig") // Função para gerar embeddings

const addDocumentWithEmbedding = async (title, content, tags) => {
  try {
    // Gerar embedding para o conteúdo
    const embedding = await createEmbedding(content);

    // Adicionar o documento ao Firestore
    const docRef = await addDoc(collection(db, "documents"), {
      title,
      content,
      tags,
      embedding,
    });

    console.log("Documento adicionado com sucesso:", docRef.id);
  } catch (error) {
    console.error("Erro ao adicionar documento:", error);
  }
};

module.exports = { addDocumentWithEmbedding };
