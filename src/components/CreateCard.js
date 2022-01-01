import CardColor from "./CardColor";
import { useState } from "react";

const CreateCard = ({ handleAddCard }) => {
  const [cardText, setCardText] = useState("");

  const handleTextChange = (event) => {
    // console.log(event.target.value);
    setCardText(event.target.value);
  };

  const handleSaveClick = () => {
    handleAddCard(cardText);
  };

  return (
    <div className="create-card">
      <h3>Create New Card</h3>
      <textarea
        placeholder="Add your note here! :)"
        value={cardText}
        onChange={handleTextChange}
      ></textarea>
      <CardColor />
      <div className="card-footer">
        <button className="save-card" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateCard;
