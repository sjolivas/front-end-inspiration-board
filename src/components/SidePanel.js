import React, { useEffect, useState } from "react";
import axios from "axios";
import CreateCard from "./CreateCard";
import CreateBoard from "./CreateBoard";
import SelectBoard from "./SelectBoard";

const SidePanel = ({
  selectedBoard,
  handleAddCard,
  onSelectBoard,
  onDisplayBoard,
}) => {
  const [currentBoards, setCurrentBoards] = useState([]);

  const onDeleteBoard = () => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/boards/${selectedBoard}`)
      .then((response) => {
        console.log("response", response);
        // ask Michelle to include board_id in success response message
        const boardId = selectedBoard;
        console.log("selectedBoard", selectedBoard);
        const deletedBoard = document.getElementById(boardId);
        deletedBoard.remove();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="sidepanel-main">
      <SelectBoard
        onSelectBoard={onSelectBoard}
        setCurrentBoards={setCurrentBoards}
        onDisplayBoard={onDisplayBoard}
      />
      <CreateBoard />
      <CreateCard handleAddCard={handleAddCard} selectedBoard={selectedBoard} />
      <button className="delete-board" onClick={onDeleteBoard}>
        Delete Selected Board
      </button>
    </div>
  );
};

export default SidePanel;
