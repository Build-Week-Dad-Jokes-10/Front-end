import React, { useState, useContext } from "react";
import { axiosWithAuth } from "../utils/AxiosWithAuth";
import { Button, Form, FormGroup, Input } from "reactstrap";
import Footer from "./Footer";
import { UserContext } from "../contexts/UserContext";
import { ClipLoader } from "react-spinners";

export default function SignUp(props) {
  const [cred, setCred] = useState({
    username: "",
    password: "",
    confirmPassword: ""
  });
  const [err, setErr] = useState("");

  const { state, dispatch } = useContext(UserContext);

  const handleChange = e => {
    e.preventDefault();
    setCred({
      ...cred,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    axiosWithAuth()
      .post("https://dad-jokes2.herokuapp.com/auth/register", cred)
      .then(res => {
        const newUser = JSON.parse(res.config.data);

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

  return (
    <>
      {state.isLoading ? (
        <ClipLoader
          size={150}
          loading={state.isLoading}
          style={{ display: "block", marginTop: "20%" }}
        />
      ) : (
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
      )}
    </>
  );
}
