import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import WinBanner from "../WinBanner/WinBanner";
import LoseBanner from "../LoseBanner/LoseBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');
  
  function handleGuess(tentativeGuess) {
    
    let nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus('win');
    } else if(nextGuesses.length === NUM_OF_GUESSES_ALLOWED){
      setGameStatus('lose');
    }
      
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} setGameStatus={setGameStatus}/>

      <GuessInput
        handleGuess={handleGuess}
        gameStatus={gameStatus}
      />
      {
        gameStatus === 'win' && (
          <WinBanner numOfGuesses={guesses.length}/>
        )
      }

      {
        gameStatus === 'lose' && (
          <LoseBanner answer={answer}/>
        )
      }
    </>
  );
}

export default Game;
