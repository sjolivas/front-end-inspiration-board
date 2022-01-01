const SelectBoard = (props) => {
  return (
    <section className="board-selector">
      <h3>Select Board to Display:</h3>
      <select id="board-list" onChange={props.onSelectBoard}>
        <option disabled selected value>
          -- Select Board --
        </option>
      </select>
    </section>
  );
};

export default SelectBoard;
