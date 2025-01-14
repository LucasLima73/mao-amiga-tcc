export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const cep = searchParams.get('cep');
  
    if (!cep) {
      return new Response(JSON.stringify({ error: 'CEP é obrigatório.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  
    try {
      // Geocodificação para obter coordenadas do CEP
      const geocodeResponse = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json`,
        {
          params: {
            address: cep,
            key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
          },
        }
      );
  
      const location = geocodeResponse.data.results[0]?.geometry.location;
  
      if (!location) {
        return new Response(
          JSON.stringify({ error: 'Localização não encontrada.' }),
          {
            status: 404,
            headers: { 'Content-Type': 'application/json' },
          }
        );
      }
  
      // Busca de locais próximos (tentando palavras-chave diferentes)
      const keywords = ['Polícia Federal', 'Delegacia', 'Federal Police'];
      let results = [];
  
      for (const keyword of keywords) {
        const placesResponse = await axios.get(
          `https://maps.googleapis.com/maps/api/place/nearbysearch/json`,
          {
            params: {
              location: `${location.lat},${location.lng}`,
              radius: 10000, // Raio de 10 km
              keyword,
              key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
            },
          }
        );
  
        if (placesResponse.data.results.length > 0) {
          results = placesResponse.data.results;
          break; // Encerra o loop se encontrar resultados
        }
      }
  
      if (results.length === 0) {
        return new Response(
          JSON.stringify({ message: 'Nenhum estabelecimento encontrado.' }),
          {
            status: 404,
            headers: { 'Content-Type': 'application/json' },
          }
        );
      }
  
      return new Response(JSON.stringify(results), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error('Erro ao buscar locais:', error.message);
      return new Response(JSON.stringify({ error: 'Erro interno do servidor.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }
  