import logo from './logo.svg';
import './App.css';

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
      </header>
    </div>
  );
}

export default App;


// coin component -- this has a couple states: total flips, total heads, total tails. updates on every flip
// coin component includes button to flip coin
// function for random choice of the array of options: in this case probably heads / tails depending on what image URL is
// can have a ternary to not show coin on first flip
// app file has description of totals at bottom + renders coin