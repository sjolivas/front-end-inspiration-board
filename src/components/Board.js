import React from "react";
import Card from "./Card";
import axios from "axios";
import CreateCard from "./CreateCard";
import "./SidePanel";

const Board = ({ selectedBoard }) => {
  //querying the db for all associated card ids with this particular board id
  // use axios.get and url from backend
  //filling in that info into card components
  //generate an array of card components to be rendered
  // const onDisplayBoard = () => {
  //   axios
  //   .get(`${process.env.REACT_APP_BACKEND_URL}/boards/${selectedBoard}/cards/`)
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => console.log(error));
  // }

  // API calls for likes
  // patch
  // get
  // delete

  return (
    // get associated cards from database
    // render card components for each db record
    // displays Card array
    <div className="board-main">
      {/* {cards.map((card) => (
        <Card id={card.id} text={card.text} />
      ))} */}
    </div>
  );
};

export default Board;
