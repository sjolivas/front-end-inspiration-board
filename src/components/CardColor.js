const CardColor = (props) => {
  return (
    <div className="card-color">
      <label>Pick a Card Color:</label>
      <select id="color-buttons" onChange={props.onSelectColor}>
        <option>--Select Color--</option>
        <option id="yellow">Yellow</option>
        <option id="red">Red</option>
        <option id="green">Green</option>
        <option id="blue">Blue</option>
      </select>
    </div>
  );
};

export default CardColor;
