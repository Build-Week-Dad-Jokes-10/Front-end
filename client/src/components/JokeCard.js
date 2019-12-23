import React, { useState } from "react";
import { Card, CardText, Col, Button } from "reactstrap";

export default function JokeCard(props) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <Col md={{ offset: 2 }}>
      <Card
        style={{ width: "80%", margin: "2% 0", backgroundColor: "#2670C5" }}
      >
        <CardText
          style={{
            fontSize: "20px",
            textShadow: "1px 1px black",
            color: "white",
            padding: "3%"
          }}
        >
          {props.setup}
        </CardText>
        {isClicked ? (
          <CardText
            style={{
              fontSize: "20px",
              textShadow: "1px 1px black",
              color: "white"
            }}
          >
            {props.punchline}
          </CardText>
        ) : null}
        <button
          className="punchline-btn"
          onClick={() => {
            setIsClicked(!isClicked);
          }}
        >
          {!isClicked ? "Show punchline" : "Hide Punchline"}
        </button>
      </Card>
    </Col>
  );
}
