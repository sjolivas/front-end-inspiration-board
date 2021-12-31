import React from "react";
import Card from "./Card";
import axios from "axios";
import "./Board.css"

const Board = () => {
  //querying the db for all associated card ids with this particular board id
  // use axios.get and url from backend
  //filling in that info into card components
  //generate an array of card components to be rendered
  return (
    // get associated cards from database
    // render card components for each db record
    <div className="board-main">
      <Card/>
    </div>
  );
};

export default Board;
