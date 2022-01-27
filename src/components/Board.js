import React from "react";
import Card from "./Card";
import "./SidePanel";

const Board = ({ cards, onUpdateCards }) => {
  const cardsList = cards.map((card) => {
    return (
      <Card
        key={card.cardId}
        cardId={card.cardId}
        message={card.message}
        likesCount={card.likesCount}
        onUpdate={onUpdateCards}
      />
    );
  });

  return <div className="board-main">{cardsList}</div>;
};

export default Board;
