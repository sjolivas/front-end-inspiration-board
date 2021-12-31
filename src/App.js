import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import SidePanel from "./components/SidePanel";

function App() {
  //saves the current selected board from side panel's id as a piece of state
  const [selectedBoard, setSelectedBoard] = useState(null);

  const onSelectBoard = (event) => {
    setSelectedBoard(event.target.value);
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
      />
      <Board className="board"/>
    </div>
  );
}

export default App;
