import React, { useState, useContext } from "react";
import axios from "axios";
import { JokeContext } from "../contexts/JokeContext";
import JokeCardList from "./JokeCardList";
import { Container, Card, Nav, NavItem, NavLink } from "reactstrap";
import daddy from "../../src/daddy.jpg";
import Footer from "./Footer";

export default function HomePage() {
  const { joke } = useContext(JokeContext);
  console.log(joke);
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
          <Nav className="d-flex justify-content-center">
            <NavItem className="home-page-nav">
              <NavLink href="/" className="home-page-nav-link">
                Log In
              </NavLink>
            </NavItem>
            <NavItem className="home-page-nav">
              <NavLink href="#" className="home-page-nav-link">
                Sign Up
              </NavLink>
            </NavItem>
            <NavItem className="home-page-nav">
              <NavLink href="#" className="home-page-nav-link">
                Settings
              </NavLink>
            </NavItem>
          </Nav>
        </Card>
        <h1>Top Dad Jokes </h1>
        <JokeCardList />
      </Container>
      <Footer />
    </>
  );
}
