'use client'
import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios'; // Certifique-se de instalar a dependência axios

export default function Clima() {
  const [location, setLocation] = useState(null);
  const [cityQuery, setCityQuery] = useState('');
  const apiKey = ''; 

  const handleCitySearch = async () => {
    try {

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityQuery}&appid=${apiKey}&units=metric`
      );


      if (response.status === 200) {
        const data = response.data;
        setLocation({
          name: data.name,
          temperature: data.main.temp,
          weather: data.weather[0].description,
        });
      } else {
        console.error('Erro ao buscar localização:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao buscar localização:', error);
    }
  };

  return (
    <div className="flex h-screen">
      <aside className="flex flex-col bg-[#023020] w-1/4 items-center justify-end">
        <button className="h-14 w-64 mb-2 bg-slate-200 text-black rounded-2xl text-2xl font-semibold p-1 hover:bg-slate-100 hover:text-slate-500">
          <Link href="/chatgpt">CHAT</Link>
        </button>
      </aside>

  
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


      {location && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Informações sobre a cidade:</h2>
          <p className="text-lg">Nome: {location.name}</p>
          <p className="text-lg">Temperatura: {location.temperature}°C</p>
          <p className="text-lg">Tempo: {location.weather}</p>
        </div>
      )}
    </div>
  );
}
