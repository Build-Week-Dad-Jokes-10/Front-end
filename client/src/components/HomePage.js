import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";
import { JokeContext } from "../contexts/JokeContext";
import JokeCardList from "./JokeCardList";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Container, Card, Nav, NavItem, NavLink } from "reactstrap";
import daddy from "../../src/daddy.jpg";
import Footer from "./Footer";

export default function HomePage() {
  const { joke } = useContext(JokeContext);
  const { user, setUser } = useContext(UserContext);
  //TODO setloading when backend
  const [logged, setLogged] = useState(false);

  const [modal, setModal] = useState(false);
  const [newJoke, setNewJoke] = useState({setup: '', punchline: ''})
  
  const toggle = () => setModal(!modal);

  console.log(joke);
  useEffect(() => {
    console.log(localStorage.getItem("token"));
    if (localStorage.getItem("token") === "true") {
      setLogged(true);
    }
  }, [logged]);
  const logout = () => {
    localStorage.clear();
    alert("Thank you! Please come back soon!");
  };

  console.log(user);
  return (
    <>
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
        <Button onClick={toggle}>Add Joke</Button>
        <Modal isOpen={modal} toggle={toggle} className="add-joke">
            <ModalHeader toggle={toggle}>Create Joke</ModalHeader>
            <Form onSubmit={'handleSubmit'}>
              <FormGroup>
                  <Input
                    type='text'
                    name="setup"
                    placeholder="Enter a setup"
                    value={newJoke.setup}
                  />
                </FormGroup>

                <FormGroup>
                  <Input
                    type='text'
                    name="punchline"
                    placeholder="Enter a punchline"
                    value={newJoke.punchline}
                  />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
          </Modal>
        <JokeCardList />
      </Container>
      <Footer />
    </>
  );
}
