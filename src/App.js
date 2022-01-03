import React, { useEffect, useState } from "react";
import Board from "./components/Board";
import { nanoid } from "nanoid";
import SidePanel from "./components/SidePanel";

function App() {
  //saves the current selected board from side panel's id as a piece of state
  const [selectedBoard, setSelectedBoard] = useState(null);

  const onSelectBoard = (event) => {
    setSelectedBoard(event.target.value);
  };

  const [cards, setCards] = useState([]);
  // const [boards, setBoards] = useState([]);

  // useEffect(() => {

  // },[])

  // const addBoard = (cards, title, owner) => {
  //   const newBoard = {
  //     // id: add id
  //     cards: cards,
  //     title: title,
  //     owner: owner,
  //   }
  //   const newBoards = [...boards, newBoard];
  //   setBoards(newBoard);
  // }

  // const deleteBoard = (id) => {
  //   const newBoards = boards.filter((board) => board.id !== id);
  //   setBoards(newBoards);
  // }

  // will pass this funtion to CreateCard.js to update state and save a card.
  const addCard = (text, likes) => {
    // console.log(text);
    const newCard = {
      id: nanoid(),
      text: text,
      likes: likes,
    };
    const newCards = [...cards, newCard];
    setCards(newCards);
  };

  const deleteCard = (id) => {
    const newCards = cards.filter((card) => card.id !== id);
    setCards(newCards);
  };

  // render Board with board id of selected board in dropdown menu
  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>
      <SidePanel
        className="sidepanel"
        // onSelectBoard={onSelectBoard}
        // selectedBoard={selectedBoard}
      />
      <Board
        className="board"
        cards={cards}
        handleAddCard={addCard}
        handleDeleteCard={deleteCard}
      />
    </div>
  );
}

export default App;
