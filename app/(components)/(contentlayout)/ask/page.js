'use client'
import { useState } from 'react'

export default function Home() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setAnswer('')
    setError('')

    try {
      const response = await fetch('/api/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      })

      const data = await response.json()

      if (response.ok) {
        setAnswer(data.answer)
      } else {
        setError(data.error || 'Algo deu errado.')
      }
    } catch (err) {
      console.error('Erro ao enviar pergunta:', err)
      setError('Erro ao conectar ao servidor.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Perguntas e Respostas</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-md rounded-lg p-6"
      >
        <label
          htmlFor="question"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Digite sua pergunta:
        </label>
        <textarea
          id="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          rows={4}
          className="w-full p-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Exemplo: Qual é o objetivo do seu projeto TCC?"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:opacity-50"
          disabled={!question || loading}
        >
          {loading ? 'Carregando...' : 'Enviar'}
        </button>
      </form>

      {error && (
        <div className="mt-4 p-4 w-full max-w-md bg-red-100 text-red-700 border border-red-400 rounded-md">
          {error}
        </div>
      )}

      {answer && (
        <div className="mt-4 p-4 w-full max-w-md bg-green-100 text-green-700 border border-green-400 rounded-md">
          <h2 className="font-bold mb-2">Resposta:</h2>
          <p>{answer}</p>
        </div>
      )}
    </div>
  )
}
