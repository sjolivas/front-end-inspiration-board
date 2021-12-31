import React from "react";
import "./Card.css";

const Card = () => {
  // axios.patch to update likes associate with the card id
  // axios.delete to delete card record associated with the card id
  return (
    //message here
    //likes count
    <div className="card-main">
      CARD
      <button>Like</button>
      <button>Delete</button>
    </div>
  );
};

export default Card;
