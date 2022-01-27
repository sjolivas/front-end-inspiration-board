const SelectBoard = ({ onSelectBoard, selectedBoard, boardList, onDisplayBoard }) => {

  const boardValue = selectedBoard || "";
  console.log(boardValue);

  const onSelectChange = (event) => {
    const id = parseInt(event.target.value);
    onSelectBoard(id);
  };

  return (
    <section className="board-selector">
      <h3>Select Board to Display</h3>
      <select id="board-list" onChange={onSelectChange} value={boardValue}>
        <option value={-1}>-- Select Board --</option>
        { boardList.map(board => (
          <option key={board.board_id} value={board.board_id}>{board.title}</option>
        )) }
      </select>
      <button className="display-board" onClick={onDisplayBoard}>
        Display Selected Board
      </button>
    </section>
  );
};

export default SelectBoard;
