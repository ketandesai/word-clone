import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guesses, setGuesses] = React.useState([]);
  
  function handleGuess(tentativeGuess) {
    //perform guess
    if (guesses.length == 6) {
      console.log("no more guesses");
      return;
    }
  
    let nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer}/>

      <GuessInput
        handleGuess={handleGuess}
      />
    </>
  );
}

export default Game;
