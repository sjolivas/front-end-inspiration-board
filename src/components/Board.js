import React from "react";
import Card from "./Card";
import axios from "axios";
import CreateCard from "./CreateCard";
import "./SidePanel";

const Board = ({ cards, handleAddCard, handleDeleteCard }) => {
  //querying the db for all associated card ids with this particular board id
  // use axios.get and url from backend
  //filling in that info into card components
  //generate an array of card components to be rendered
  // axios
  // .get(`${process.env.REACT_APP_BACKEND_URL}/boards/${props.selectedBoard}/cards/`)
  // .then()
  // .catch();

  // handleAddCard passed to Board.js into the CreateCard component from App.js using "prop drilling" (used destructuring)
  // prop drilling: the process of passing things through components until it gets to where it is needed.
  return (
    // each board should have its own array of cards
    // render card components for each db record
    // displays Card array
    <div className="board-main">
      {/* <h3 className="board-title">Board Title: Board Board</h3>
      <h3 className="author-title">Author: SillyGaggle</h3> */}
      <CreateCard handleAddCard={handleAddCard} />
      {cards.map((card) => (
        <Card
          id={card.id}
          text={card.text}
          handleDeleteCard={handleDeleteCard}
        />
      ))}
    </div>
  );
};

export default Board;
