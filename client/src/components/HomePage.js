import React, { useState, useContext } from "react";
import axios from "axios";
import { JokeContext } from "../contexts/JokeContext";
import JokeCardList from "./JokeCardList";

export default function HomePage() {
  const { joke } = useContext(JokeContext);
  console.log(joke);
  return (
    <div>
      <JokeCardList />
    </div>
  );
}
