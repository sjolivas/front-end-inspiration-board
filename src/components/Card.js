import axios from "axios";
import React from "react";
import "./SidePanel";
import { MdDeleteForever } from 'react-icons/md';
import { FcLike } from "react-icons/fc";


const Card = ({id, text}) => {

  // axios.patch to update likes associate with the card id
  // onCardUpdate()
  //   axios
  //   .patch(`${process.env.REACT_APP_BACKEND_URL}/boards/${props.selectedBoard}/cards/${props.selectedCard}`, {likes: #})
  //   .then((response) => {
  //     console.log(response)
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   });

  // // axios.delete to delete card record associated with the card id
  // // set cards state -- cards array being displayed connected to a board id. 
  // onDeleteCard()  
  //   axios
  //   .delete(`${process.env.REACT_APP_BACKEND_URL}/boards/${props.selectedBoard}/cards/${props.cardID}`)  
  //   .then((response) => {  
  //     console.log(response);  
  //     console.log(response.data);  
  
  //     // const cards = this.state.card.filter(item => item.id !== id);  
  //     // this.setState({ cards });  
  //   })
  //   .catch((error) => console.log(error));  


  return (
    //message here
    //likes count
    <div className="card-main">
      <span className="card-text">{text}</span>

      <div className="card-footer">
        <FcLike className="like-icon" size="1.3em"/>
        <MdDeleteForever className="delete-icon" size="1.3em"/>
      </div>
    </div>
  );
};

export default Card;
