import React, { useState } from "react";
import Board from "./components/Board";
import SidePanel from "./components/SidePanel";
import axios from "axios";

function App() {
  const [selectedBoard, setSelectedBoard] = useState(-1);
  const [cards, setCards] = useState([]);

  const onSelectBoard = (id) => {
    setSelectedBoard(id);

    if (id < 0) {
      refreshCards(id);
    }
  };

  const onDisplayBoard = () => {
    refreshCards();
  };

  const refreshCards = (overrideId) => {
    const boardId = overrideId || selectedBoard;

    if (boardId < 0) {
      setCards([]);
      return;
    }

    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards/${boardId}/cards`)
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
        }
        console.log(cardsList);
        setCards(cardsList);
      })
      .catch((error) => console.log(error));
  };

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
        onUpdateCards={refreshCards}
        cards={cards}
        selectedBoard={selectedBoard}
      />
    </div>
  );
}

export default App;
