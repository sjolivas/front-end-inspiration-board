import axios from "axios";
import React, { useState } from "react";
import "./SidePanel";
import { MdDeleteForever } from "react-icons/md";
import { FcLike } from "react-icons/fc";

const Card = ({ cards, cardId, message, likesCount, setCards }) => {
  // const state = { likes: likesCount };
  let [likes, setLikes] = useState(likesCount);

  // API calls for likes
  // patch
  // get
  // delete
  console.log(cardId);
  const onCardLike = (event) => {
    // console.log(event.target.parentNode);

    axios
      .patch(`${process.env.REACT_APP_BACKEND_URL}/cards/${cardId}`)
      .then((response) => {
        likes += 1;
        const likesNumber = document.querySelector(`#likesDisplay${cardId}`);
        likesNumber.textContent = `Likes:${likes}`;
      })
      .catch((error) => console.log(error));
  };

  const onCardDelete = (event) => {
    //having trouble selecting card id from target event
    // console.log(event.currentTarget.value);
    // console.log('delete', cardId);
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${cardId}`)
      .then((response) => {
        console.log("response", response);
        // ask Michelle to include board_id in success response message
        // const boardId = selectedBoard;
        // console.log("selectedBoard", selectedBoard);
        // const deletedBoard = document.getElementById(boardId);
        // deletedBoard.remove();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="card-main" id={cardId}>
      <span className="card-text">{message}</span>

      <div className="card-footer">
        <FcLike
          className="like-icon"
          size="1.3em"
          onClick={() => onCardLike()}
        />
        <small id={`likesDisplay${cardId}`}>likes: {likes}</small>
        <MdDeleteForever
          className="delete-icon"
          value={cardId}
          size="1.3em"
          onClick={() => onCardDelete()}
        />
      </div>
    </div>
  );
};

export default Card;
