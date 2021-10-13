import React from "react";
import "./App.css";
import Coin from "./Coin";

function App() {
  return (
    <div className="App">
      <Coin />
    </div>
  );
}

export default App;

// coin component -- this has a couple states: total flips, total heads, total tails. updates on every flip
// coin component includes button to flip coin
// function for random choice of the array of options: in this case probably heads / tails depending on what image URL is
// can have a ternary to not show coin on first flip
// app file has description of totals at bottom + renders coin
