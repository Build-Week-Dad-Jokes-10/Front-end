import React, { useState, useContext, useEffect } from "react";
import { axiosWithAuth } from "../utils/AxiosWithAuth";
import { Button, Form, FormGroup, Input } from "reactstrap";
import Footer from "./Footer";
import { UserContext } from "../contexts/UserContext";

export default function SignUp(props, { values, touched, errors }) {
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
            {errors.username && touched.username ? (             
            <div>{errors.username}</div>           
            ) : null}
          </FormGroup>

          <FormGroup className="login-cred">
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={cred.password}
              onChange={handleChange}
            />
            {errors.password && touched.password ? (             
            <div>{errors.password}</div>           
            ) : null}
          </FormGroup>
          <FormGroup className="login-cred">
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={cred.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && touched.confirmPassword ? (             
            <div>{errors.confirmPassword}</div>           
            ) : null}
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

const signupValidationSchema = Yup.object().shape({
  username: Yup.string()
   .max(5, 'Please enter no more than 40 characters')
   .required( 'Please enter a username' ),
  password: Yup.string()
   .max(10, 'Please enter no more than 10 characters')
   .required('Please enter a password'),
  confirmPassword: Yup.string()
   .oneOf([Yup.ref('password'), null], 'Passwords must match')
 })