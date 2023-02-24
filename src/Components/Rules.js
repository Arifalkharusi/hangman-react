import React from "react";

const Rules = ({ closeRules }) => {
  return (
    <div className="overlay">
      <div>
        <div className="close" onClick={() => closeRules()}>
          X
        </div>
        <ul>
          <li>
            A secret word selected and displays a series of underscores
            representing each letter on the screen.
          </li>
          <li>
            Players attempt to guess the word by suggesting letters one at a
            time.
          </li>
          <li>
            A set number of incorrect guesses may be allowed before the game
            ends.
          </li>
          <li>Players must enter your guesses through the virtual keyboard.</li>
          <li>
            If a guessed letter is in the word, all instances of that letter are
            revealed in the blanks.
          </li>
          <li>
            If a guessed letter is not in the word, a part of the hangman's
            figure is drawn on the screen.
          </li>
          <li>
            The game ends when either the word is correctly guessed or the
            hangman's figure is completed.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rules;
