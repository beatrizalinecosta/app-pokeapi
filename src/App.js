import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ListPage from './pages/ListPage';
import CreatePage from './pages/CreatePage';
import { useState } from 'react';

function App() {
  const [favoritePokemons, setFavoritePokemons] = useState([]); 

  const addFavorite = (pokemon) => {
    setFavoritePokemons([...favoritePokemons, pokemon]);
  };

  const removeFavorite = (pokemon) => {
    setFavoritePokemons(favoritePokemons.filter(fav => fav.id !== pokemon.id));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<ListPage addFavorite={addFavorite} removeFavorite={removeFavorite} favoritePokemons={favoritePokemons} />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Router>
  );
}

export default App;
