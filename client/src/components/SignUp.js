import React, { useState, useContext, useEffect } from "react";
import { axiosWithAuth } from "../utils/AxiosWithAuth";
import { Button, Form, FormGroup, Input } from "reactstrap";
import Footer from "./Footer";
import { UserContext } from "../contexts/UserContext";

export default function SignUp(props) {
  const [cred, setCred] = useState({
    username: "",
    password: "",
    confirmPassword: ""
  });
  const [err, setErr] = useState("");
  const { user, setUser } = useContext(UserContext);

  const handleChange = e => {
    e.preventDefault();
    setCred({
      ...cred,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (cred.confirmPassword === cred.password) {
      localStorage.setItem("token", "true");
      //   let newUser = user.slice();
      //   user.push({ ...cred, id: Date.now() });
      //   localStorage.setItem(user, "true");
      //   console.log("the new user", newUser);
      props.history.push("/");
    } else {
      setErr("Password does not match confirmation, please try again");
    }
  };

  return (
    <>
      <h1 className="login-header">Dad Jokes</h1>
      <Form onSubmit={handleSubmit} className="login-form">
        <label className="login-label">Sign Up</label>

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
          <FormGroup className="login-cred">
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={cred.confirmPassword}
              onChange={handleChange}
            />
          </FormGroup>
        </div>

        <FormGroup className="submit-container">
          <p className="signup-prompt-con">
            Already have an account?{" "}
            <span
              className="signup-prompt"
              onClick={() => {
                props.history.push("/login");
              }}
            >
              Log In
            </span>
          </p>
          <Button>Sign Up</Button>
        </FormGroup>
        {err && <div className="error-message">{err}</div>}
      </Form>
      <Footer />
    </>
  );
}