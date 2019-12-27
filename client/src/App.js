import React, { useState } from "react";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import ProfilePage from "./components/ProfilePage";
import Login from "./components/Login";
import "./App.css";
import { UserContext } from "./contexts/UserContext";
import { JokeContext } from "./contexts/JokeContext";
import dummyData from "./dummyData";

function App() {
  const [joke, setJoke] = useState(dummyData);
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <PrivateRoute exact path='/' component={HomePage} /> */}
          <JokeContext.Provider value={{ joke, setJoke }}>
            <Route exact path="/" component={Login} />
            <Route exact path="/homePage" component={HomePage} />
            <Route exact path="/profile" component={ProfilePage} />
            {/* <Route component={Login} /> */}
          </JokeContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
