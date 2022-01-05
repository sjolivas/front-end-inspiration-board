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

  return (
    <div className="card-main" id={cardId}>
      <span className="card-text">{message}</span>

      <div className="card-footer">
        {likesCount}
        <FcLike className="like-icon" size="1.3em" />
        <MdDeleteForever className="delete-icon" size="1.3em" />
      </div>
    </div>
  );
};

export default Card;
