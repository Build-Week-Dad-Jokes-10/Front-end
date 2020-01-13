import React, { useReducer } from "react";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import ProfilePage from "./components/ProfilePage";
import Login from "./components/Login";
import Settings from "./components/Settings";
import "./App.css";
import { UserContext } from "./contexts/UserContext";
import { JokeContext } from "./contexts/JokeContext";

import SignUp from "./components/SignUp";
import { initialState, reducer } from "./reducers";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Router>
        <Switch>
          <UserContext.Provider value={{ state, dispatch }}>
            <JokeContext.Provider value={{ state, dispatch }}>
              <Route exact path="/login" component={Login} />
              <Route exact path="/" component={HomePage} />
              <PrivateRoute exact path="/profile" component={ProfilePage} />
              <PrivateRoute exact path="/settings" component={Settings} />
              <Route exact path="/signup" component={SignUp} />
            </JokeContext.Provider>
          </UserContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
