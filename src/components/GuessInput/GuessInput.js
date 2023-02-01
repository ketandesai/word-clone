import React from "react";

function GuessInput({ handleGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (tentativeGuess.length != 5) {
      window.alert("Please Enter a guess of 5 characters");
      return;
    }
    
    handleGuess(tentativeGuess);
    setTentativeGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input" className="guess-input">
        Enter guess:
      </label>
      <input
        required
        disabled={gameStatus !== 'running'}
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        value={tentativeGuess}
        onChange={(event) => {
          const upperCase = event.target.value.toLocaleUpperCase();
          setTentativeGuess(upperCase);
        }}
      />
    </form>
  );
}

export default GuessInput;
