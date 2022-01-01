import React from "react";
import Card from "./Card";
import axios from "axios";
import CreateCard from "./CreateCard";
import "./SidePanel";

const Board = ({ cards }) => {
  //querying the db for all associated card ids with this particular board id
  // use axios.get and url from backend
  //filling in that info into card components
  //generate an array of card components to be rendered
  // axios
  // .get(`${process.env.REACT_APP_BACKEND_URL}/boards/${props.selectedBoard}/cards/`)
  // .then()
  // .catch();

  return (
    // get associated cards from database
    // render card components for each db record
    // displays Card array
    <div className="board-main">
      {cards.map((card) => (
        <Card id={card.id} text={card.text} />
      ))}
    </div>
  );
};

export default Board;
