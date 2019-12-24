import React, { useState } from "react";
import { axiosWithAuth } from "../utils/AxiosWithAuth";
import { Button, Form, FormGroup, Input } from "reactstrap";
import Footer from "./Footer";

const Login = props => {
  const [cred, setCred] = useState({ username: "", password: "" });
  const [err, setErr] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("", cred)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        props.history.push("/");
      })
      .catch(err => {
        console.log(err.message);
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
      <h1 className="login-header">Dad Jokes</h1>
      <Form onSubmit={handleSubmit} className="login-form">
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
          <Button>Submit</Button>
        </FormGroup>
        {err && <div className="error-message">{err}</div>}
      </Form>
      <Footer />
    </>
  );
};

export default Login;
