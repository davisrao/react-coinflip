import React, { useState } from "react";
import { getFlippedResult } from "./helpers";

function Coin({}) {
  const [image, setImage] = useState(
    "https://media.istockphoto.com/photos/quarter-dollar-us-coin-isolated-on-white-picture-id476142091?s=612x612"
  );
  const [totalFlips, setTotalFlips] = useState(0);
  const [heads, setHeads] = useState(0);
  const [tails, setTails] = useState(0);

  function handleClick() {
    const result = getFlippedResult();

    result === "heads" ? setHeads(heads + 1) : setTails(tails + 1);

    setTotalFlips(totalFlips + 1);
  }

  return (
    <div className="Coin">
      <div className="Coin-image-container">
        <img className="Coin-image" src={image} />
      </div>
      <button className="Coin-btn" onClick={handleClick}>
        Flip me
      </button>
      <p className="Coin-flips">
        Out of {totalFlips}, there have been {heads} heads and {tails} tails
      </p>
    </div>
  );
}

export default Coin;
