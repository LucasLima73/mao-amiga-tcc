'use client'

import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import axios from 'axios'

// Componente para os marcadores no mapa
const Marker = ({ text, isSelected }) => (
  <div
    style={{
      color: 'white',
      background: isSelected ? 'blue' : 'red',
      padding: '5px 10px',
      borderRadius: '50%',
      textAlign: 'center',
      cursor: 'pointer',
    }}
  >
    {text}
  </div>
)

// Função para calcular a distância com a fórmula de Haversine
const calculateDistance = (lat1, lng1, lat2, lng2) => {
  const toRadians = (degrees) => (degrees * Math.PI) / 180
  const R = 6371 // Raio da Terra em km

  const dLat = toRadians(lat2 - lat1)
  const dLng = toRadians(lng2 - lng1)

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2)

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  return R * c // Distância em km
}

const GoogleMapComponent = () => {
  const [cep, setCep] = useState('')
  const [locations, setLocations] = useState([])
  const [center, setCenter] = useState({ lat: -23.6942, lng: -46.5649 }) // Posição padrão (São Bernardo do Campo)
  const [error, setError] = useState(null)
  const [selectedLocationIndex, setSelectedLocationIndex] = useState(null)

  const handleSearch = async () => {
    if (!cep) {
      setError('Por favor, digite um CEP válido.')
      return
    }

    try {
      setError(null)
      const response = await axios.get(`/api/places?cep=${cep}`)
      const results = response.data

      if (results.length > 0) {
        // Calcula as distâncias e ordena os locais
        const sortedLocations = results.map((location) => {
          const distance = calculateDistance(
            center.lat,
            center.lng,
            location.geometry.location.lat,
            location.geometry.location.lng
          )
          return { ...location, distance }
        })

        sortedLocations.sort((a, b) => a.distance - b.distance) // Ordena por distância

        setLocations(sortedLocations)
        setCenter(sortedLocations[0].geometry.location) // Centraliza no local mais próximo
      } else {
        setError('Nenhum estabelecimento encontrado para o CEP fornecido.')
      }
    } catch (err) {
      setError('Erro ao buscar locais. Por favor, tente novamente.')
      console.error(err)
    }
  }

  const handleLocationClick = (index) => {
    setSelectedLocationIndex(index)
    setCenter(locations[index].geometry.location) // Centraliza o mapa no local selecionado
  }

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          placeholder="Digite o CEP da sua localização atual"
          style={{
            padding: '10px',
            width: 'calc(100% - 120px)',
            marginRight: '10px',
          }}
        />
        <button onClick={handleSearch} style={{ padding: '10px 20px' }}>
          Buscar
        </button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div style={{ height: '500px', width: '100%', position: 'relative' }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
          }}
          center={center}
          zoom={14}
        >
          {locations.map((location, index) => (
            <Marker
              key={index}
              lat={location.geometry.location.lat}
              lng={location.geometry.location.lng}
              text={(index + 1).toString()} // Índice como marcador
              isSelected={selectedLocationIndex === index}
            />
          ))}
        </GoogleMapReact>
        {/* Lista de locais no canto direito do mapa */}
        <div
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'white',
            padding: '10px',
            borderRadius: '5px',
            maxHeight: '400px',
            overflowY: 'auto',
            width: '300px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h4 style={{ margin: '0 0 10px' }}>Estabelecimentos:</h4>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
            {locations.map((location, index) => (
              <li
                key={index}
                style={{
                  marginBottom: '10px',
                  cursor: 'pointer',
                  padding: '5px',
                  background:
                    selectedLocationIndex === index ? '#f0f0f0' : 'white',
                  borderRadius: '5px',
                }}
                onClick={() => handleLocationClick(index)}
              >
                <strong>
                  {index + 1}. {location.name}
                </strong>
                <p style={{ margin: 0 }}>{location.vicinity}</p>
                <p
                  style={{ margin: 0 }}
                >{`Distância: ${location.distance.toFixed(2)} km`}</p>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${location.geometry.location.lat},${location.geometry.location.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'blue',
                    textDecoration: 'underline',
                    fontSize: '14px',
                  }}
                >
                  Ver rotas
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default GoogleMapComponent
