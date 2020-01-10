import React, { useState, useReducer } from "react";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import ProfilePage from "./components/ProfilePage";
import Login from "./components/Login";
import Settings from "./components/Settings";
import "./App.css";
import { UserContext } from "./contexts/UserContext";
import { JokeContext } from "./contexts/JokeContext";
import dummyData from "./dummyData";
import dummyUserData from "./dummyUserData";
import SignUp from "./components/SignUp";
import { initialState, reducer } from "./reducers";

function App() {
  const [joke, setJoke] = useState(dummyData);
  const [user, setUser] = useState(dummyUserData);
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("its me", state.user.username);
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <PrivateRoute exact path='/' component={HomePage} /> */}
          <UserContext.Provider value={{ state, dispatch }}>
            <JokeContext.Provider value={{ joke, setJoke }}>
              <Route exact path="/login" component={Login} />
              <Route exact path="/" component={HomePage} />
              <PrivateRoute exact path="/profile" component={ProfilePage} />
              <PrivateRoute exact path="/settings" component={Settings} />
              <Route exact path="/signup" component={SignUp} />
              {/* <Route component=   {Login} /> */}
            </JokeContext.Provider>
          </UserContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
