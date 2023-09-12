'use client'
import { useState } from 'react';
import { GetClimaResponse } from '../service/service';
import Link from 'next/link';

export default function Clima() {
  const [location, setLocation] = useState(null);
  const [cityQuery, setCityQuery] = useState('');
  const apiKey = '5c6de4b36195d7d1b3a2c86353e907f5';

  const handleCitySearch = async () => {
    try {
      const data = await GetClimaResponse(cityQuery);
      setLocation(data);
    } catch (error) {
      console.error('Erro ao buscar localização:', error);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Barra lateral */}
      <aside className="flex flex-col bg-[#023020] w-1/4 items-center justify-end">
        <button className="h-14 w-64 mb-2 bg-slate-200 text-black rounded-2xl text-2xl font-semibold p-1 hover:bg-slate-100 hover:text-slate-500">
          <Link href="/chatgpt">CHAT</Link>
        </button>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex flex-col items-center bg-[#011e14] flex-grow justify-end">
        <input
          type="text"
          placeholder="Digite o nome da cidade"
          value={cityQuery}
          onChange={(e) => setCityQuery(e.target.value)}
          className="w-64 h-12 p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-slate-500 mt-4"
        />
        <button
          onClick={handleCitySearch}
          className="w-32 h-12 bg-[#6E716E] text-white font-semibold mt-4 rounded-lg hover:bg-slate-500 transition duration-300"
        >
          Pesquisar
        </button>
      </main>

      {/* Resultados da pesquisa */}
      {location && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Informações sobre a cidade:</h2>
          <p className="text-lg">Nome: {location.name}</p>
          {/* Certifique-se de que 'location.details' seja uma propriedade válida do objeto */}
          <p className="text-lg">Outros detalhes: {location.details}</p>
        </div>
      )}
    </div>
  );
}
