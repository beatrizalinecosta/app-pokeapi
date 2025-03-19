import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// URL PokeAPI
const API_URL = "https://pokeapi.co/api/v2/pokemon/";

function CreatePage() {
  const [pokemons, setPokemons] = useState([]);
  const [favoritePokemons, setFavoritePokemons] = useState([]);
  const [newPokemon, setNewPokemon] = useState("");
  const [loading, setLoading] = useState(true);

  //Fetch Dados API
  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = async () => {
    try {
      const response = await axios.get(API_URL);
      setPokemons(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
      setLoading(false);
    }
  };

  //Adicionar Favoritos
  const toggleFavorite = (pokemon) => {
    if (favoritePokemons.some(fav => fav.name === pokemon.name)) {
      setFavoritePokemons(favoritePokemons.filter(fav => fav.name !== pokemon.name));
    } else {
      setFavoritePokemons([...favoritePokemons, pokemon]);
    }
  };

  //Criar Pokemon Novo, Adicionar a Lista
  const handleCreate = async () => {
    if (newPokemon) {
      const pokemon = { name: newPokemon };
      setPokemons([...pokemons, pokemon]);
      setFavoritePokemons([...favoritePokemons, pokemon]);
      setNewPokemon("");
    }
  };

  //Deletar Pokemon
  const handleDelete = (name) => {
    setPokemons(pokemons.filter(pokemon => pokemon.name !== name));
  };

  return (
    <div className="grid grid-cols-2 gap-8 p-8">
        {/* VOLTAR HOME */}
        <div>
            <Link to='/' className="bg-gray-500  text-white p-2 m-2 rounded ">Voltar</Link>
        </div>
        
        {/* CRIAR NOVO POKEMON */}
        <div class="col-span-3">
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Criar Novo Pokémon</h2>
            <input
            type="text"
            value={newPokemon}
            onChange={(e) => setNewPokemon(e.target.value)}
            placeholder="Enter Pokémon name"
            className="border-2 border-gray-700 focus:border-pink-600 rounded"
            />
            <button onClick={handleCreate} className="bg-blue-500  text-white p-2 m-2 rounded ">Add Pokémon</button>
        </div>

        {/* MOSTRAR LISTA */}
        <div className="grid grid-cols-1">
        <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Lista Pokémon</h2>
        {loading ? (
            <p>Loading...</p>
        ) : (
            <ul>
            {pokemons.map((pokemon) => (
                <li key={pokemon.name} className="flex justify-between items-center bg-gray-100 p-4 m-1 border-4 border-black-500">
                <span>{pokemon.name}</span>
                <div className="justify-between">
                <button onClick={() => toggleFavorite(pokemon)} className="bg-green-500 text-white p-2 m-2 rounded">
                    {favoritePokemons.some(fav => fav.name === pokemon.name) ? 'Desfavoritar' : 'Favorito'}
                </button>
                
                <button onClick={() => handleDelete(pokemon.name)} className="bg-red-500 text-white p-2 rounded">Deletar</button>
                </div>
                </li>
            ))}
            </ul>
        )}
        </div>
     
        {/* LISTA FAVORITOS */}
        <div className="grid grid-cols-1 ">
            <div className="flex-col">  
                <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Sua Lista</h2>
                
                {favoritePokemons.length === 0 ? (
                    <p>Lista Vazia!</p>
                ) : (
                    <ul>
                    {favoritePokemons.map((pokemon) => (
                        <li key={pokemon.name} className="flex justify-between items-center bg-gray-100 p-4 m-1 border-4 border-black-500">
                        <span>{pokemon.name}</span>
                        <button onClick={() => toggleFavorite(pokemon)} className="bg-red-500 text-white p-2 rounded">
                            Desfavoritar
                        </button>
                        </li>
                    ))}
                    </ul>
                )}
            </div>
        </div>
    </div>
  );
}

export default CreatePage;
