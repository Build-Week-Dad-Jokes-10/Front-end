import React, { useContext } from "react";
import { JokeContext } from "../contexts/JokeContext";
import MainHeader from "./MainHeader";
import Footer from "./Footer";
import { Card, Col, Container, CardText, Button } from "reactstrap";
import JokeCardList from "./JokeCardList";
import { MdAccountCircle } from "react-icons/md";

export default function ProfilePage() {
  const { joke } = useContext(JokeContext);
  return (
    <>
      <MainHeader />
      <Container>
        <Card
          style={{
            display: "flex",
            flexDirection: "row",

            backgroundColor: "#2670C5",
            marginTop: "5%",
            height: "30vh"
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <MdAccountCircle size={200} style={{ float: "left" }} />
            <div>
              <Button
                style={{
                  backgroundColor: "#EBC700",
                  color: "#380a15",
                  fontWeight: "bold"
                }}
              >
                Edit Account
              </Button>
            </div>
          </div>
          {/* //TODO replace with account picture */}
          <h1
            style={{
              paddingTop: "5%",
              paddingLeft: "15%",
              fontSize: "50px",
              color: "#380a15"
            }}
          >
            Account Placeholder
          </h1>
        </Card>
        <h1
          style={{
            marginTop: "10%",
            fontWeight: "bold",
            fontSize: "50px",
            color: "#380a15"
          }}
        >
          My Jokes
        </h1>
        {/* <JokeCardList /> */}
        {/* TODO add joke card list when backend  */}
        {/* //TODO filter jokes to specific users account */}

        {/* <Footer /> */}
        {/* //TODO add footer when done */}
      </Container>
    </>
  );
}
