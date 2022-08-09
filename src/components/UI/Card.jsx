import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    // Everything inside <Card> tag in AddUser.jsx are children of props of this Card file
    // {classes.card} apply css class from this file css import (this case is Card.module.css)
    // {props.className} apple css class from wherever the component is (this case AddUser.module.css)
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
