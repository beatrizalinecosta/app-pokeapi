import { useState, useEffect } from 'react';
import axios from 'axios';

//Card individual
function PokemonCard({ pokemon, addFavorite, removeFavorite, isFavorite }) {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    axios.get(pokemon.url)
      .then((response) => {
        setPokemonData(response.data);
      })
      .catch((error) => console.error("Error fetching Pokémon details", error));
  }, [pokemon.url]);

  if (!pokemonData) return <div>Loading...</div>;

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <img src={pokemonData.sprites.front_default} alt={pokemon.name} className="w-full h-48 object-contain" />
      <h3 className="text-xl font-bold mt-2">{pokemon.name}</h3>
      <button 
        onClick={() => isFavorite ? removeFavorite(pokemonData) : addFavorite(pokemonData)}
        className={`mt-2 p-2 w-full ${isFavorite ? 'bg-red-500' : 'bg-gray-900'} text-white rounded`}
      >
        {isFavorite ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
      </button>
    </div>
  );
}

export default PokemonCard;
