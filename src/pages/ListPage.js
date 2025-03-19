import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//Componente Card
import PokemonCard from '../components/PokemonCard';

//Listar Pokemons
function ListPage({ addFavorite, removeFavorite, favoritePokemons }) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=20') //GET API, Limite de 20 itens
      .then((response) => {
        setPokemons(response.data.results);
      })
      .catch((error) => console.error("Error fetching Pokémon", error));
  }, []);

  return (
    <div>
        <div className='p-8'>
        <Link to='/' className="bg-gray-500  text-white p-2 m-2 rounded ">Voltar</Link>
    </div>
    <div className="grid grid-cols-2 gap-8 p-8">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight text-balance">Pokémons</h2>
        <div className="grid grid-cols-2 gap-4">
          {pokemons.map(pokemon => (
            <PokemonCard 
              key={pokemon.name}
              pokemon={pokemon}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
              isFavorite={favoritePokemons.some(fav => fav.name === pokemon.name)}
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-semibold tracking-tight text-balance">Favoritos</h2>
        <div className="grid grid-cols-1 gap-4">
          {favoritePokemons.map(fav => (
            <div key={fav.id} className="flex justify-between items-center bg-gray-100 p-4 rounded">
              <span>{fav.name}</span>
              <button onClick={() => removeFavorite(fav)} className="bg-red-500 text-white p-2 rounded">Remove</button>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default ListPage;
