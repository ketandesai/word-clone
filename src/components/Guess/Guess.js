import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  let result = checkGuess(value, answer);
  
  return (
    <p className="guess">
      {range(5).map((column) => (
        <Cell
          key={column}
          letter={result ? result[column].letter : undefined}
          status={result ? result[column].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
