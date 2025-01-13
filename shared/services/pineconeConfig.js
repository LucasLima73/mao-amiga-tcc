// import { Pinecone } from '@pinecone-database/pinecone'

// const pinecone = new Pinecone()

// export const initPinecone = async () => {
//   try {
//     await pinecone.init({
//       apiKey: process.env.PINECONE_API_KEY, // Certifique-se de usar a variável correta
//       environment: process.env.PINECONE_ENVIRONMENT, // Certifique-se de usar a variável correta
//     })

//     return pinecone.Index('documents-index') // Substitua pelo nome do índice
//   } catch (error) {
//     console.error('Erro ao inicializar o Pinecone:', error)
//     throw new Error('Falha na inicialização do Pinecone.')
//   }
// }
