import React from "react";
import { useDispatch } from "react-redux";
import { checkLetter } from "../store/handlers";

const Keyboard = ({ alphabet }) => {
  const dispatch = useDispatch();

  const letterHandler = (e) => {
    dispatch(checkLetter(alphabet));
    // desables the clicked letter
    e.target.classList.add("disabled");
  };

  return (
    <div className="letter" onClick={letterHandler}>
      {alphabet}
    </div>
  );
};

export default Keyboard;
