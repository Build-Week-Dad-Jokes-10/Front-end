import React, { useContext } from "react";
import { JokeContext } from "../contexts/JokeContext";
import JokeCard from "./JokeCard";

export default function JokeCardList() {
  const { joke } = useContext(JokeContext);
  return (
    <div>
      {joke.map(j => (
        <JokeCard setup={j.setup} punchline={j.punchline} />
      ))}
    </div>
  );
}
