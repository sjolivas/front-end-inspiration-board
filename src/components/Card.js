import axios from "axios";
import React from "react";
import "./SidePanel";
import { MdDeleteForever } from "react-icons/md";
import { FcLike } from "react-icons/fc";

const Card = ({ cardId, message, likesCount, onUpdate }) => {

  const onCardLike = (event) => {
    axios
      .patch(`${process.env.REACT_APP_BACKEND_URL}/cards/${cardId}`)
      .then((response) => {
        onUpdate()
      })
      .catch((error) => console.log(error));
  };

  const onCardDelete = (event) => {
    console.log(cardId);
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${cardId}`)
      .then((response) => {
        onUpdate()
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="card-main">
      <span className="card-text">{message}</span>

      <div className="card-footer">
        <FcLike
          className="like-icon"
          size="1.3em"
          onClick={() => onCardLike()}
        />
        <small>Likes: {likesCount}</small>
        <MdDeleteForever
          className="delete-icon"
          size="1.3em"
          onClick={() => onCardDelete()}
        />
      </div>
    </div>
  );
};

export default Card;
