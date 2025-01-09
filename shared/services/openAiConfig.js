import OpenAI from 'openai'

// Função para gerar embeddings
export const createEmbedding = async (content) => {
  const maxRetries = 3
  let attempt = 0

  while (attempt < maxRetries) {
    try {
      const response = await openai.embeddings.create({
        model: 'text-embedding-ada-002',
        input: content,
      })

      return response.data[0].embedding
    } catch (error) {
      if (error.response && error.response.status === 429) {
        console.warn(
          `Rate limit atingido. Tentando novamente (${
            attempt + 1
          }/${maxRetries})...`
        )
        attempt++
        await new Promise((resolve) => setTimeout(resolve, 2000 * attempt)) // Aguardar antes de tentar novamente
      } else {
        console.error('Erro ao criar embedding:', error)
        throw new Error('Falha ao gerar embedding.')
      }
    }
  }

  throw new Error('Limite de tentativas excedido ao gerar embedding.')
}
