import { useState } from "react";

const CreateBoard = ({ handleTitleChange, handleOwnerChange }) => {
  // State
  const [values, setValues] = useState({
    // id: id,
    title: "",
    owner: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [boards, SetBoards] = useState({
    title: "",
    owner: "",
    cards: [],
  });

  // Input Handlers
  const handleTitleInputChange = (event) => {
    // console.log(event.target.value);
    setValues({ ...values, title: event.target.value });
  };

  const handleOwnerInputChange = (event) => {
    // console.log(event.target.value);
    setValues({ ...values, owner: event.target.value });
  };

  // Submit Validations and Handler
  const submitBool =
    submitted && valid ? (
      <div className="success-messgae">Success! You made a new board</div>
    ) : null;

  const titleValidation =
    submitted && !values.title ? (
      <span className="error">Please Enter Title</span>
    ) : null;

  const ownerValidation =
    submitted && !values.owner ? (
      <span className="error">Please Enter Name</span>
    ) : null;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.title && values.owner) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <section className="create-new-board">
      <h3>Create New Board</h3>
      <form className="BoardForm" onSubmit={handleSubmit}>
        {submitBool}
        <input
          onChange={handleTitleInputChange}
          value={values.title}
          id="board-title-input"
          name="title"
          type="text"
          maxLength="25"
          placeholder="Board Title"
          // onChange={handleTitleChange}
        />
        {titleValidation}
        <input
          onChange={handleOwnerInputChange}
          value={values.owner}
          id="owner-name-input"
          name="owner"
          type="text"
          maxLength="30"
          placeholder="Owner's Name"
          // onChange={handleOwnerChange}
        />
        {ownerValidation}
        <button className="submit-board" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default CreateBoard;
