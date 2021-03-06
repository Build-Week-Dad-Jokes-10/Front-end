import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";

import JokeCardList from "./JokeCardList";
import {
  Button,
  Modal,
  ModalHeader,
  Form,
  FormGroup,
  Input,
  Container,
  Card,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import daddy from "../../src/daddy.jpg";
import Footer from "./Footer";
import { ClipLoader } from "react-spinners";

import { axiosWithAuth } from "../utils/AxiosWithAuth";

export default function HomePage() {
  //TODO setloading when backend
  const [logged, setLogged] = useState(false);

  const [modal, setModal] = useState(false);

  const [newJoke, setNewJoke] = useState({
    setup: "",
    punchline: "",
    type: "general"
  });
  const { state, dispatch } = useContext(UserContext);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    dispatch({ type: "LOGIN_START" });
    axios
      .get(
        "https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes/50"
      )
      .then(res => {
        console.log("replacement api", res.data);
        dispatch({ type: "JOKE_LOAD_SUCCESS", payload: res.data });
      })
      .catch(err => {
        console.log(err.message);
      });

    if (localStorage.getItem("token")) {
      setLogged(true);
    }
  }, [logged]);
  const logout = () => {
    localStorage.clear();
    alert("Thank you! Please come back soon!");
  };

  const handleModalChange = e => {
    setNewJoke({
      ...newJoke,
      [e.target.name]: e.target.value
    });
  };

  const handleModalSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(
        "https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/jokes/create",
        newJoke
      )
      .then(res => {
        toggle();
        console.log(res);
        setNewJoke({
          setup: "",
          punchline: "",
          type: "general"
        });
      })
      .catch(err => {
        console.log(err.message);
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
        <Container>
          <Card
            style={{
              height: "30vh",
              marginBottom: "10%",
              backgroundImage: `url(${daddy})`
            }}
          >
            <h1
              style={{
                paddingTop: "8%",
                fontSize: "50px",
                color: "white",
                textShadow: "1px 1px black"
              }}
            >
              Dad Jokes
            </h1>

            {logged && (
              <Nav className="d-flex justify-content-center">
                {/* <NavItem className="home-page-nav">
                <NavLink href="/" className="home-page-nav-link">
                  Home
                </NavLink>
              </NavItem> */}
                <NavItem className="home-page-nav">
                  <NavLink href="/profile" className="home-page-nav-link">
                    My Profile
                  </NavLink>
                </NavItem>
                <NavItem className="home-page-nav">
                  <NavLink href="/settings" className="home-page-nav-link">
                    Settings
                  </NavLink>
                </NavItem>
                <NavItem className="home-page-nav">
                  <NavLink
                    href="/"
                    onClick={logout}
                    className="home-page-nav-link"
                  >
                    Log Out
                  </NavLink>
                </NavItem>
              </Nav>
            )}
            {!logged && (
              <Nav className="d-flex justify-content-center">
                <NavItem className="home-page-nav">
                  <NavLink href="/login" className="home-page-nav-link">
                    Log In
                  </NavLink>
                </NavItem>
                <NavItem className="home-page-nav">
                  <NavLink href="/signup" className="home-page-nav-link">
                    Sign Up
                  </NavLink>
                </NavItem>
              </Nav>
            )}
          </Card>
          <h1 style={{ color: "#380a15" }}>Top Dad Jokes </h1>
          {logged && (
            <Button
              className="showModalBtn"
              onClick={toggle}
              style={{ backgroundColor: "#2670c5" }}
            >
              Add Joke
            </Button>
          )}

          <Modal
            isOpen={modal}
            toggle={toggle}
            style={{ width: "800px", height: "200vh", marginTop: "17%" }}
          >
            <ModalHeader toggle={toggle} style={{ marginBottom: "20%" }}>
              <h1 className="add-joke-header">Create Joke</h1>
            </ModalHeader>
            <Form onSubmit={handleModalSubmit} className="add-form">
              <FormGroup className="add-joke-input">
                <Input
                  type="text"
                  name="setup"
                  placeholder="Enter a setup"
                  value={newJoke.setup}
                  onChange={handleModalChange}
                />
              </FormGroup>

              <FormGroup className="add-joke-input">
                <Input
                  type="text"
                  name="punchline"
                  placeholder="Enter a punchline"
                  value={newJoke.punchline}
                  onChange={handleModalChange}
                />
              </FormGroup>
              <Button
                className="add-joke-btn"
                style={{ backgroundColor: "#2670c5" }}
              >
                Submit
              </Button>
            </Form>
          </Modal>
          <JokeCardList />
        </Container>
      )}
      <Footer />
    </>
  );
}
