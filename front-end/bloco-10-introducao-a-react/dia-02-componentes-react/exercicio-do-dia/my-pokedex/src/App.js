import './App.css';
import Pokedex from './components/Pokedex';
import Data from './data';

function App() {
  return (
    <main className="content">
      <h1>Pokedex</h1>
      <section className="content-cart">
        <Pokedex listPokemons={Data} />
      </section>
    </main>
  );
}

export default App;
