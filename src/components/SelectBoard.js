import axios from "axios";
import { useState, useEffect } from "react";
import CreateBoard from "./CreateBoard";
// holds an array of boards

const SelectBoard = ({ boards, handleAddBoard, handleDeleteBoard }) => {
  return (
    <section className="board-selector">
      <h3>Select Board to Display</h3>
      <select id="board-list">
        <option disabled selected value>
          -- Select Board --
        </option>
        {/* {boards.map} */}
      </select>
      <button className="display-board">Display Board</button>
    </section>
  );
};

export default SelectBoard;
