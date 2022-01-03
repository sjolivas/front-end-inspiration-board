import axios from "axios";
import { useState } from "react";

const makeEmptyBoardFields = () => {
  return {
    title: "",
    owner: "",
  };
};

const CreateBoard = () => {
  const [boardFields, setBoardFields] = useState(makeEmptyBoardFields());
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  // Submit Validations and Handler
  const submitBool =
    submitted && valid ? (
      <div className="success-message">Success! You made a new board</div>
    ) : null;

  const titleValidation =
    submitted && !boardFields.title ? (
      <span className="error">Please Enter Title</span>
    ) : null;

  const ownerValidation =
    submitted && !boardFields.owner ? (
      <span className="error">Please Enter Name</span>
    ) : null;

  const onSubmitBoard = (event) => {
    console.log("in submit board");
    event.preventDefault();

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/boards`, {
        title: boardFields.title, //find a way to use form field info here
        owner: boardFields.owner, //find a way to use form field info here
      })
      .then((response) => {
        setBoardFields(makeEmptyBoardFields());
        setValid(true);
        setSubmitted(true);
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  // add error logic for going over 40 characters in card's message

  const lengthValidator = (target) => {
    const length = document.getElementById(target.id).value.length;
    if (length === target.maxLength) {
      target.style.backgroundColor = "#de7171";
    } else {
      target.style.backgroundColor = "white";
    }
  };

  //const BoardForm = ({onBoardAdded}) => {};

  const handleTitleChanged = (event) => {
    setBoardFields({ ...boardFields, title: event.target.value });
    lengthValidator(event.target);
  };

  const handleOwnerChanged = (event) => {
    setBoardFields({ ...boardFields, owner: event.target.value });
    lengthValidator(event.target);
  };

  return (
    <section className="create-new-board">
      <h3>Create New Board</h3>
      <form className="BoardForm" onSubmit={onSubmitBoard}>
        {submitBool}
        <input
          id="board-title-input"
          name="title"
          type="text"
          maxLength="25"
          placeholder="Board Title"
          // value ={boardFields.title}
          // onChange={handleTitleChanged}
        />
        {titleValidation}
        <input
          id="owner-name-input"
          name="owner"
          type="text"
          maxLength="30"
          placeholder="Owner's Name"
          // value={boardFields.owner}
          // onChange={handleOwnerChanged}
        />
        {ownerValidation}
        <button className="submit-board" type="submit" value="Submit New Board">
          Submit
        </button>
      </form>
    </section>
  );
};

export default CreateBoard;
