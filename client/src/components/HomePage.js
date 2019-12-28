import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { JokeContext } from "../contexts/JokeContext";
import JokeCardList from "./JokeCardList";
import { Container, Card, Nav, NavItem, NavLink } from "reactstrap";
import daddy from "../../src/daddy.jpg";
import Footer from "./Footer";

export default function HomePage() {
  const { joke } = useContext(JokeContext);
  const [logged, setLogged] = useState(false);
  console.log(joke);
  useEffect(() => {
    console.log(localStorage.getItem('token'))
    if (localStorage.getItem('token') === 'true') {
      setLogged(true)
    }
  }, [logged])
  const logout = () => {
    localStorage.clear()
    alert('Thank you! Please come back soon!')
  }
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
          {logged &&
            <Nav className="d-flex justify-content-center">
            <NavItem className="home-page-nav">
              <NavLink href="/homepage" className="home-page-nav-link">
                Home
              </NavLink>
            </NavItem>
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
              <NavLink href="/homepage" onClick={logout} className="home-page-nav-link">
                Log Out
              </NavLink>
            </NavItem>
          </Nav>
          }
          {!logged && 
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
          </Nav>
          }
        </Card>
        <h1 style={{ color: "#380a15" }}>Top Dad Jokes </h1>
        <JokeCardList />
      </Container>
      <Footer />
    </>
  );
}
