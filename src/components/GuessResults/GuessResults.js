import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((row) => (
        <p key={row} className="guess">
          <Guess guess={guesses[row]}/>
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
