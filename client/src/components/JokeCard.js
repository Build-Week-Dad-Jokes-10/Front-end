import React, { useState } from "react";

export default function JokeCard(props) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      <p>{props.setup}</p>
      <button
        onClick={() => {
          setIsClicked(!isClicked);
        }}
      >
        {!isClicked ? "Show punchline" : "Hide Punchline"}
      </button>
      {isClicked ? <p>{props.punchline}</p> : null}
    </div>
  );
}
