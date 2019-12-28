import React, { useState, useRef, useEffect } from "react";
import { Card, CardText, Col, Button, Collapse } from "reactstrap";
import {
  TiArrowUpOutline,
  TiArrowDownOutline,
  TiArrowUpThick,
  TiArrowDownThick
} from "react-icons/ti";
import { TweenMax, TweenLite, Power3 } from "gsap";

export default function JokeCard(props) {
  const [isClicked, setIsClicked] = useState(false);
  const [isUpLiked, setIsUpLiked] = useState(false);
  const [isDownLiked, setIsDownLiked] = useState(false);
  let cardItem = useRef(null);
  let cardItemText = useRef(null);
  const likeButton = useRef(null);
  const unlikeButton = useRef(null);

  const toggle = () => {
    TweenMax.set(cardItemText.current, { autoAlpha: 0 });

    TweenLite.to(cardItemText.current, 0.8, {
      autoAlpha: 1,
      delay: 0.2
    });

    setIsClicked(!isClicked);
  };

  useEffect(() => {
    console.log("this is punchline", cardItemText);
    console.log("this is card", cardItem);
    console.log("this is like button", likeButton);
    // cardItem.current.style.display = "none";

    TweenLite.to(cardItem.current, 1, {
      opacity: 1,
      y: 50,
      ease: Power3.easeOut
    });
  }, []);

  const handleUpClick = () => {
    if (isDownLiked) {
      setIsDownLiked(false);
    }
    setIsUpLiked(true);
    TweenLite.to(likeButton.current, 0.5, {
      rotation: 360
    });
  };
  return (
    <Col md={{ offset: 2 }}>
      <Card
        innerRef={cardItem}
        style={{
          width: "80%",
          margin: "2% 0",
          backgroundColor: "#2670C5",
          opacity: "0"
        }}
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

        <Collapse isOpen={isClicked}>
          <CardText
            style={{
              fontSize: "20px",
              textShadow: "1px 1px black",
              color: "white"
            }}
          >
            <p ref={cardItemText}>{props.punchline}</p>
          </CardText>
        </Collapse>

        <CardText
          style={{ bottom: "5", position: "absolute", color: "#380a15" }}
        >
          Posted by {props.username}
        </CardText>
        <div className="vote-buttons">
          {isUpLiked ? (
            <button
              ref={unlikeButton}
              style={{ border: "none", background: "none", outline: "none" }}
            >
              <TiArrowUpThick
                style={{ cursor: "pointer", color: "#380a15" }}
                size={30}
                onClick={() => {
                  console.log("unlikebutton", unlikeButton);
                  setIsUpLiked(false);
                  //TODO add isliked functionality to API
                  //TODO add GSAP
                }}
              />
            </button>
          ) : (
            <button
              ref={likeButton}
              style={{ border: "none", background: "none", outline: "none" }}
            >
              <TiArrowUpOutline
                style={{ cursor: "pointer", color: "#380a15" }}
                size={30}
                onClick={handleUpClick}
              />
            </button>
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
          onClick={
            toggle
            // TweenMax.to(cardItem.current, 0.5, {
            //   opacity: 1,
            //   height: 220,
            //   ease: Power3.easeOut
            // });
            // TweenMax.from(cardItemText.current, 1, {
            //   opacity: 1,
            //   ease: Power3.easeIn
            // });
          }
        >
          {!isClicked ? "Show punchline" : "Hide Punchline"}
        </button>
      </Card>
    </Col>
  );
}
