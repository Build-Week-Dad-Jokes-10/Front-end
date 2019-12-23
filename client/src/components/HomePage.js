import React, { useState, useContext } from "react";
import axios from "axios";
import { JokeContext } from "../contexts/JokeContext";
import JokeCardList from "./JokeCardList";
import { Container, Card, Nav, Navbar, NavItem, NavLink } from "reactstrap";

export default function HomePage() {
  const { joke } = useContext(JokeContext);
  console.log(joke);
  return (
    <Container>
      <Card style={{ height: "30vh", marginBottom: "10%" }}>
        <h1 style={{ paddingTop: "8%", fontSize: "50px" }}>Dad Jokes</h1>
        <Nav className="d-flex justify-content-center">
          <NavItem className="home-page-nav">
            <NavLink href="#" className="home-page-nav-link">
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
      <JokeCardList />
    </Container>
  );
}
