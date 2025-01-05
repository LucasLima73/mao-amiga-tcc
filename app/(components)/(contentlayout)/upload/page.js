'use client'

import { useState } from "react";
import { generateEmbedding } from "../../../../shared/services/embeddingService";
import { saveToPinecone } from "../../../../shared/services/saveToPinecone";

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Por favor, selecione um arquivo.");
      return;
    }

    setUploading(true);
    setMessage("");

    try {
      const fileText = await file.text();
      const title = file.name.replace(/\.[^/.]+$/, ""); // Nome do arquivo sem extensão
      const embedding = await generateEmbedding(fileText); // Gerar embedding
      await saveToPinecone(title, embedding, { title, content: fileText }); // Salvar no Pinecone

      setMessage("Documento enviado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar documento:", error);
      setMessage("Erro ao enviar o documento.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Upload de Documentos</h1>
      <input type="file" accept=".txt" onChange={handleFileChange} />
      <button
        onClick={handleUpload}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: "#0070f3",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
        disabled={uploading}
      >
        {uploading ? "Enviando..." : "Fazer Upload"}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}
