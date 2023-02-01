import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Guess from "../Guess/Guess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function runGuess(guessTerm) {
  //perform guess
}

function Game() {
  const [guessTerm, setGuessTerm] = React.useState("");

  return (
    <>
      <Guess
        guessTerm={guessTerm}
        setGuessTerm={setGuessTerm}
        runGuess={runGuess}
      />
    </>
  );
}

export default Game;
