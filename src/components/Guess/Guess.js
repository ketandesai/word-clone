import React from "react";
import { range } from "../../utils";

function Guess({value}) {
  return (
    <p className="guess">
      {range(5).map((column) => (
        <span key={column} className="cell">{value ? value[column]: undefined}</span>
      ))}
    </p>
  );
}

export default Guess;
