import React from "react";
import { range } from "../../utils";

function Guess({guess}) {
  return (
    <>
      {range(5).map((column) => (
        <span key={column} className="cell">{guess?.charAt(column)}</span>
      ))}
    </>
  );
}

export default Guess;
