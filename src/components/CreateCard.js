import CardColor from "./CardColor";
import { useState } from "react";

const CreateCard = ({ handleAddCard }) => {
  const [cardText, setCardText] = useState("");
  const characterLimit = 250;

  const handleTextChange = (event) => {
    // console.log(event.target.value);
    if (characterLimit - event.target.value.length >= 0) {
      setCardText(event.target.value);
    }
  };

  // Event Handler for save card.
  // Validates that text was actaully input before saving cardtext.
  // Resets create card textarea.
  const handleSaveClick = () => {
    // handleAddCard(cardText);
    if (cardText.trim().length > 0) {
      handleAddCard(cardText);
      setCardText("");
    }
  };

  return (
    <div className="card-main create-card">
      <textarea
        placeholder="Add your note here! :)"
        rows="8"
        cols="10"
        wrap="hard"
        value={cardText}
        onChange={handleTextChange}
      ></textarea>
      <div className="card-footer">
        <small>{characterLimit - cardText.length} Remaining</small>
        <button className="save-card" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateCard;
