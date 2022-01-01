const CreateBoard = () => {
  return (
    <section className="create-new-board">
      <h3>Create New Board</h3>
      <form className="BoardForm">
        {" "}
        {/*onSubmit={onSubmitBoard} */}
        <input
          id="board-title-input"
          name="title"
          type="text"
          maxLength="25"
          placeholder="Board Title"
          // value ={boardFields.title}
          // onChange={handleTitleChanged}
        />
      </form>
      <form>
        <input
          id="owner-name-input"
          name="owner"
          type="text"
          maxLength="30"
          placeholder="Owner's Name"
          // value={boardFields.owner}
          // onChange={handleOwnerChanged}
        />
      </form>
      <form>
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
