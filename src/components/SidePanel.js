import React, { useEffect, useState } from "react";
import axios from "axios";
import CreateCard from "./CreateCard";
import CreateBoard from "./CreateBoard";
import SelectBoard from "./SelectBoard";

const SidePanel = ({
  selectedBoard,
  onSelectBoard,
  onDisplayBoard,
}) => {
  const [currentBoards, setCurrentBoards] = useState([]);

  const refreshBoards = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
      .then((response) => {
        const boards = response.data[0];
        setCurrentBoards(boards);
      })
      .catch((error) => console.log(error));
  };

  const onDeleteBoard = () => {
    if (selectedBoard < 0) { return; }

    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/boards/${selectedBoard}`)
      .then((response) => {
        onSelectBoard(-1);
        refreshBoards();
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    refreshBoards();
  }, []);

  return (
    <div className="sidepanel-main">
      <SelectBoard
        onSelectBoard={onSelectBoard}
        selectedBoard={selectedBoard}
        boardList={currentBoards}
        onDisplayBoard={onDisplayBoard}
      />
      <CreateBoard 
        onCreateBoard={refreshBoards}
      />
      <CreateCard
        selectedBoard={selectedBoard}
        onDisplayBoard={onDisplayBoard}
      />
      <button className="delete-board" onClick={onDeleteBoard}>
        Delete Selected Board
      </button>
    </div>
  );
};

export default SidePanel;
