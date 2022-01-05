import React, { useState } from "react";
import Board from "./components/Board";
import SidePanel from "./components/SidePanel";
import axios from "axios";

function App() {
  //saves the current selected board from side panel's id as a piece of state
  const [selectedBoard, setSelectedBoard] = useState(null);

  const onSelectBoard = (event) => {
    setSelectedBoard(event.target.value);
  };

  const [cards, setCards] = useState([]);

  const addCard = (text) => {
    console.log(text);
  };

  const onDisplayBoard = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards/${selectedBoard}/cards`)
      .then((response) => {
        console.log(response);
        const responseCards = response.data.cards;
        let cardsList = [];
        for (let card of responseCards) {
          let newCard = {};
          newCard.boardId = card.board_id;
          newCard.cardId = card.card_id;
          newCard.message = card.message;
          newCard.likesCount = card.likes_count;
          cardsList.push(newCard);
        };
        console.log(cardsList);
        setCards(cardsList);
      })
      .catch((error) => console.log(error));
  };

  // render Board with board id of selected board in dropdown menu
  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>
      <SidePanel
        className="sidepanel"
        onSelectBoard={onSelectBoard}
        selectedBoard={selectedBoard}
        onDisplayBoard={onDisplayBoard}
      />
      <Board
        className="board"
        cards={cards}
        handleAddCard={addCard}
        selectedBoard={selectedBoard}
      />
    </div>
  );
}

export default App;
