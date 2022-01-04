import axios from "axios";
import React from "react";
import "./SidePanel";
import { MdDeleteForever } from "react-icons/md";
import { FcLike } from "react-icons/fc";

const Card = ({ id, text }) => {
  // API calls for likes
  // patch
  // get
  // delete

  return (
    <div className="card-main">
      <span className="card-text">{text}</span>

      <div className="card-footer">
        <FcLike className="like-icon" size="1.3em" />
        <MdDeleteForever className="delete-icon" size="1.3em" />
      </div>
    </div>
  );
};

export default Card;
