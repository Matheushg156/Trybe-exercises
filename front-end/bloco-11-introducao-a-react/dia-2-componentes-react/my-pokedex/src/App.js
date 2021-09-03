import './App.css';
import Pokedex from './components/Pokedex';
import pokemons from './data';
import './components/Pokemon.css';
import Header from './components/Header';

function App() {
  return (
    <main>
      <Header />
      <div className="container">
        <Pokedex pokemons={pokemons} />
      </div>
    </main>
  );
}

export default App;
