import React from "react";
import { CardFooter } from "reactstrap";

export default function Footer() {
  return (
    <CardFooter
      //TODO add footer text
      style={{
        marginTop: "30%",
        backgroundColor: "#380a15",
        color: "white",
        width: "100%",
        height: "2.5rem",
        bottom: "0"
      }}
    >
      Copyright Dad Jokes 2020
    </CardFooter>
  );
}
