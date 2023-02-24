import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onLoad } from "./store/handlers";
import Keyboard from "./Components/Keyboard";
import Word from "./Components/Word";
import Rules from "./Components/Rules";

const words = [
  "penguin",
  "cactus",
  "guitar",
  "mushroom",
  "waterfall",
  "tornado",
  "sushi",
  "galaxy",
  "peacock",
  "pyramid",
];

const aplhabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function App() {
  // variables
  let firstCall = useRef(true);
  const data = useSelector((state) => state.handlers);
  // selectes word at random
  const word = words[Math.trunc(Math.random() * 10)];
  const [rulesOverlay, setRulesOverlay] = useState(false);
  // redux variables
  const { letters, chances, results, showKeys } = data;
  const dispatch = useDispatch();

  // initiats the game on load
  useEffect(() => {
    if (firstCall.current) {
      dispatch(onLoad(word.toUpperCase().split("")));
      console.log(word);
    }
    // ensures it runs only once
    return () => {
      firstCall.current = false;
    };
  });
  // reloads the game
  const refreshPage = () => {
    window.location.reload();
  };

  const closeRules = () => {
    setRulesOverlay(false);
  };

  return (
    <div className="App">
      <button className="rule-btn" onClick={() => setRulesOverlay(true)}>
        Rules
      </button>
      {rulesOverlay && <Rules closeRules={closeRules} />}
      <div className="results">{results}</div>
      <div className="word">
        {letters.map((x, i) => (
          <Word data={x} key={i} />
        ))}
      </div>
      <div className="keyboard">
        {showKeys ? (
          aplhabet.map((x, i) => <Keyboard alphabet={x} key={i} />)
        ) : (
          <button className="play-again" onClick={refreshPage}>
            Play Again
          </button>
        )}
      </div>
      <div>
        <img src={require(`./img/state${chances}.GIF`)} alt="" />
      </div>
    </div>
  );
}

export default App;
