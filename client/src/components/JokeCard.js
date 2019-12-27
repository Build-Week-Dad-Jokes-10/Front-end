import React, { useState } from "react";
import { Card, CardText, Col, Button } from "reactstrap";
import {
  TiArrowUpOutline,
  TiArrowDownOutline,
  TiArrowUpThick,
  TiArrowDownThick
} from "react-icons/ti";

export default function JokeCard(props) {
  const [isClicked, setIsClicked] = useState(false);
  const [isUpLiked, setIsUpLiked] = useState(false);
  const [isDownLiked, setIsDownLiked] = useState(false);
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
        <CardText
          style={{ bottom: "5", position: "absolute", color: "#380a15" }}
        >
          Posted by {props.username}
        </CardText>
        <div className="vote-buttons">
          {isUpLiked ? (
            <TiArrowUpThick
              style={{ cursor: "pointer", color: "#380a15" }}
              size={30}
              onClick={() => {
                setIsUpLiked(false);
                //TODO add isliked functionality to API
                //TODO add GSAP
              }}
            />
          ) : (
            <TiArrowUpOutline
              style={{ cursor: "pointer", color: "#380a15" }}
              size={30}
              onClick={() => {
                if (isDownLiked) {
                  setIsDownLiked(false);
                }
                setIsUpLiked(true);
              }}
            />
          )}

          {isDownLiked ? (
            <TiArrowDownThick
              style={{ cursor: "pointer", color: "#380a15" }}
              size={30}
              onClick={() => {
                setIsDownLiked(false);
                //TODO add functionality to API
                //TODO add GSAP
              }}
            />
          ) : (
            <TiArrowDownOutline
              style={{ cursor: "pointer", color: "#380a15" }}
              size={30}
              onClick={() => {
                if (isUpLiked) {
                  setIsUpLiked(false);
                }
                setIsDownLiked(true);
              }}
            />
          )}
        </div>

        <button
          className="punchline-btn"
          onClick={() => {
            setIsClicked(!isClicked);
            //TODO add GSAP
          }}
        >
          {!isClicked ? "Show punchline" : "Hide Punchline"}
        </button>
      </Card>
    </Col>
  );
}
