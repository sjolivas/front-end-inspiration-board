import axios from "axios";
import { useState, useEffect } from "react";

const SelectBoard = () => {
  return (
    <section className="board-selector">
      <h3>Select Board to Display</h3>
      <select id="board-list">
        <option disabled selected value>
          -- Select Board --
        </option>
      </select>
      <button className="delete-board">Delete Selected Board</button>
    </section>
  );
};

export default SelectBoard;
