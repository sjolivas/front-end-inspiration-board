import CardColor from "./CardColor";

const CreateCard = () => {
  return (
    <div className="create-card">
      <h3>Create New Card</h3>
      <textarea placeholder="Add your note here! :)"></textarea>
      <CardColor />
      <div className="card-footer">
        <button className="save-card">Save</button>
      </div>
    </div>
  );
};

export default CreateCard;
