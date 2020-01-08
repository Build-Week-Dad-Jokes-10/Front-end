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
  const dislikeButton = useRef(null);
  const undoDislikeButton = useRef(null);

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
    TweenLite.to(likeButton.current, {
      keyframes: [
        { scale: 1.5, duration: 0.5 },
        { scale: 1, duration: 0.5 }
      ],
      ease: "elastic"
    });
  };
  return (
    <Col md={{ offset: 2 }}>
      <Card
        innerRef={cardItem}
        style={{
          width: "80%",
          margin: "5% 0",
          backgroundColor: "#2670C5",
          opacity: "0",
          boxShadow: "20px 15px 30px black"
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
                  TweenLite.to(unlikeButton.current, {
                    keyframes: [
                      { scale: 1.5, duration: 0.3 },
                      { scale: 1, duration: 0.3 }
                    ],
                    ease: "elastic"
                  });
                  //TODO add isliked functionality to API
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
            <button
              ref={dislikeButton}
              style={{ border: "none", background: "none", outline: "none" }}
            >
              <TiArrowDownThick
                style={{ cursor: "pointer", color: "#380a15" }}
                size={30}
                onClick={() => {
                  setIsDownLiked(false);
                  //TODO add functionality to API
                  TweenLite.to(dislikeButton.current, {
                    keyframes: [
                      { scale: 1.5, duration: 0.3 },
                      { scale: 1, duration: 0.3 }
                    ],
                    ease: "elastic"
                  });
                }}
              />
            </button>
          ) : (
            <button
              ref={undoDislikeButton}
              style={{ border: "none", background: "none", outline: "none" }}
            >
              <TiArrowDownOutline
                style={{ cursor: "pointer", color: "#380a15" }}
                size={30}
                onClick={() => {
                  if (isUpLiked) {
                    setIsUpLiked(false);
                  }
                  setIsDownLiked(true);
                  TweenLite.to(undoDislikeButton.current, {
                    keyframes: [
                      { scale: 1.5, duration: 0.5 },
                      { scale: 1, duration: 0.5 }
                    ],
                    ease: "elastic"
                  });
                }}
              />
            </button>
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
