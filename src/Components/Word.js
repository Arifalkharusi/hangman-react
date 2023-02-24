import React from "react";

const Word = ({ data }) => {
  return (
    <div>
      {data.found ? (
        <div className="add">{data.content}</div>
      ) : (
        <div className="add">_</div>
      )}
    </div>
  );
};

export default Word;
