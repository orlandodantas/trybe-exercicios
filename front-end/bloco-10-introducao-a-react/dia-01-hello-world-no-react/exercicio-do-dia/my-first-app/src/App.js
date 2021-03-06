import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['Comer frutas', 'Ler livros', 'Caminhar', 'Contar história'];
const listaCompromissos = compromissos.map((compromisso) => Task(compromisso));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h2>Tarefas</h2>
        <ol>
          {Task('Beber Água')}
        </ol>
        <h2>Array Tarefas</h2>
        <ol>
          {compromissos.map((compromisso) => Task(compromisso))}
        </ol>
      </header>
    </div>
  );
}

export default App;
