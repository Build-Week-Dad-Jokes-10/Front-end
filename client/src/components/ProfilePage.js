import React, { useContext, useEffect } from "react";
import { JokeContext } from "../contexts/JokeContext";
import { UserContext } from "../contexts/UserContext";
import MainHeader from "./MainHeader";
import Footer from "./Footer";
import { Card, Container, Button } from "reactstrap";
import JokeCardList from "./JokeCardList";
import { MdAccountCircle } from "react-icons/md";
import { axiosWithAuth } from "../utils/AxiosWithAuth";

export default function ProfilePage() {
  const { joke } = useContext(JokeContext);
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    const data = localStorage.getItem("userState");
    if (data) {
      dispatch({ type: "LOGIN_SUCCESS", payload: JSON.parse(data) });
    }
  }, []);

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
                <a
                  href="/settings"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Edit Account
                </a>
              </Button>
            </div>
          </div>
          {/* //TODO replace with account picture */}
          <div style={{ width: "100%" }}>
            <h1
              style={{
                paddingTop: "5%",
                marginRight: "20%",
                fontSize: "60px",
                color: "#380a15"
              }}
            >
              {state.user.username}
            </h1>
            <h2 style={{ display: "flex", fontSize: "20px" }}>Member Since</h2>
          </div>
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

        {/* //TODO add footer when done */}
      </Container>
      <Footer />
    </>
  );
}
