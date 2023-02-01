import React from "react";

function Guess({ guessTerm, setGuessTerm, runGuess }) {
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        runGuess(guessTerm);
        console.log(guessTerm);
        setGuessTerm("");
      }}
    >
      <label htmlFor="guess-input" className="guess-input">
        Enter guess:
      </label>
      <input
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        value={guessTerm}
        onChange={(event) => {
          let upperCase = event.target.value.toLocaleUpperCase();
          setGuessTerm(upperCase);
        }}
      />
    </form>
  );
}

export default Guess;
