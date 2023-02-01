import React from "react";
import { range } from "../../utils";
import {checkGuess} from "../../game-helpers";

function Guess({value, answer}) {
  let result = checkGuess(value, answer);
  
  return (
    <p className="guess">
      {range(5).map((column) => (
        <span key={column} className={result ? `cell ${result[column].status}` : "cell"}>{value ? value[column]: undefined}</span>
      ))}
    </p>
  );
}

export default Guess;
