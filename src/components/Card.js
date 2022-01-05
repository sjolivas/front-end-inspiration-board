import axios from "axios";
import React from "react";
import "./SidePanel";
import { MdDeleteForever } from "react-icons/md";
import { FcLike } from "react-icons/fc";

const Card = ({ cardId, message, likesCount }) => {
  // API calls for likes
  // patch
  // get
  // delete

  const onCardLike = (event) => {
    console.log(event.currentTarget.class);
    // axios
    //   .patch(`${process.env.REACT_APP_BACKEND_URL}/cards/${event.target.id}`)
    //   .then((response) => {})
    //   .catch((error) => console.log(error));
  };

  const onCardDelete = (event) => {
    //having trouble selecting card id from target event
    console.log(event.currentTarget.value);
    // axios
    //   .delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${event.target.id}`)
    //   .then((response) => {
    //     console.log("response", response);
    //     // ask Michelle to include board_id in success response message
    //     const boardId = selectedBoard;
    //     console.log("selectedBoard", selectedBoard);
    //     const deletedBoard = document.getElementById(boardId);
    //     deletedBoard.remove();
    //   })
    //   .catch((error) => console.log(error));
  };

  return (
    <div className="card-main" id={cardId}>
      <span className="card-text">{message}</span>

      <div className="card-footer">
        {likesCount}
        <FcLike className="like-icon" size="1.3em" onClick={onCardLike}/>
        <MdDeleteForever className="delete-icon" value={cardId} size="1.3em" onClick={onCardDelete}/>
      </div>
    </div>
  );
};

export default Card;
