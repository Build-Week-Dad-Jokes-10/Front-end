import React, { useState, useContext } from "react";
import { axiosWithAuth } from "../utils/AxiosWithAuth";
import { Button, Form, FormGroup, Input } from "reactstrap";
import Footer from "./Footer";
import { UserContext } from "../contexts/UserContext";

const Login = props => {
  const [cred, setCred] = useState({ username: "", password: "" });
  const [err, setErr] = useState("");
  const { state, dispatch } = useContext(UserContext);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    // if (
    //   cred.username === user[0].username &&
    //   cred.password === user[0].password
    // ) {
    //   localStorage.setItem("token", "true");
    //   props.history.push("/");
    // } else setErr("Incorrect Username/Password");
    axiosWithAuth()
      .post("https://dad-jokes2.herokuapp.com/auth/login", cred)
      .then(res => {
        const newUser = JSON.parse(res.config.data);
        console.log(newUser);
        dispatch({ type: "LOGIN_SUCCESS", payload: newUser });
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userState", JSON.stringify(newUser));
        props.history.push("/");
      })
      .catch(err => {
        console.log(err.message);
        dispatch({ type: "LOGIN_FAIL", payload: err.message });
        setErr("Invalid Username/Password");
      });
  };

  const handleChange = e => {
    e.preventDefault();
    setCred({
      ...cred,
      [e.target.name]: e.target.value
    });
  };
  return (
    <>
      {state.isLoading ? (
        <h1>...loading</h1>
      ) : (
        <>
          <h1 className="login-header">Dad Jokes</h1>
          <Form
            onSubmit={handleSubmit}
            className="login-form"
            data-testid="login-form"
          >
            <label className="login-label">Log In</label>

            <div>
              <FormGroup className="login-cred">
                <Input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={cred.username}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup className="login-cred">
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={cred.password}
                  onChange={handleChange}
                />
              </FormGroup>
            </div>

            <FormGroup className="submit-container">
              <p className="signup-prompt-con">
                Don't have an account?{" "}
                <span
                  className="signup-prompt"
                  onClick={() => {
                    props.history.push("/signup");
                  }}
                >
                  Sign Up
                </span>
              </p>
              <Button>Log In</Button>
            </FormGroup>

            {state.error && <div className="error-message">{state.error}</div>}
          </Form>
          <Footer />
        </>
      )}
    </>
  );
};

export default Login;
