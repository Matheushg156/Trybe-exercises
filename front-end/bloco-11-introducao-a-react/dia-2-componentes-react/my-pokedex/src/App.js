import './App.css';
import Pokedex from './components/Pokedex';
import pokemons from './data';
import './components/Pokemon.css';


function App() {
  return (
    <main>
      <div className="container">
        <Pokedex pokemons={pokemons} />
      </div>
    </main>
  );
}

export default App;
