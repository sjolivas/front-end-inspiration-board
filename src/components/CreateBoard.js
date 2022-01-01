const CreateBoard = () => {
  return (
    <section className="create-new-board">
      <h3>Create New Board</h3>
      <form className="BoardForm">
        {" "}
        {/*onSubmit={onSubmitBoard} */}
        <label>Board Title:</label>
        <input
          id="board-title-input"
          name="title"
          type="text"
          maxLength="25"
          placeholder="Board Title"
          // value ={boardFields.title}
          // onChange={handleTitleChanged}
        />
        <label>Owner's Name:</label>
        <input
          id="owner-name-input"
          name="owner"
          type="text"
          maxLength="30"
          placeholder="Owner's Name"
          // value={boardFields.owner}
          // onChange={handleOwnerChanged}
        />
        <input
          className="submit-board"
          type="submit"
          value="Submit New Board"
        />
      </form>
    </section>
  );
};

export default CreateBoard;
