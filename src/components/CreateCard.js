import CardColor from "./CardColor";
import { useState } from "react";
import axios from "axios";

const makeEmptyCardText = () => {
  return "";
};

const CreateCard = ({ handleAddCard, selectedBoard }) => {
  const [cardText, setCardText] = useState("");

  const handleTextChange = (event) => {
    // console.log(event.target.value);
    setCardText(event.target.value);
  };

  const handleSaveClick = () => {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/boards/${selectedBoard}/cards`,
        {
          message: cardText, //find a way to use form field info here
        }
      )
      .then((response) => {
        setCardText(makeEmptyCardText());
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.data.details);
        // setErrorMessage(error.response.data.details);
      });
    // handleAddCard(cardText);
  };

  return (
    <div className="create-card">
      <h3>Create New Card</h3>
      <textarea
        placeholder="Add your note here! :)"
        value={cardText}
        onChange={handleTextChange}
      ></textarea>
      {/* <CardColor /> */}
      <div className="card-footer">
        <button className="save-card" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateCard;
