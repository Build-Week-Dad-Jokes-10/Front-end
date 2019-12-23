import React, { useState } from "react";
import HomePage from "./components/HomePage";
import "./App.css";
import { UserContext } from "./contexts/UserContext";
import { JokeContext } from "./contexts/JokeContext";
import dummyData from "./dummyData";

function App() {
  const [joke, setJoke] = useState(dummyData);
  return (
    <div className="App">
      <JokeContext.Provider value={{ joke, setJoke }}>
        <HomePage />
      </JokeContext.Provider>
    </div>
  );
}

export default App;
