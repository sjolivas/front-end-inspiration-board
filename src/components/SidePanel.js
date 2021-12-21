import React, { useEffect, useState } from 'react';
import Board from './Board';

const SidePanel = () => {
    //axios.post for submit buttons for board and card
    // add error logic for going over 40 characters in card's message
    const lengthValidator = (target) => {
        const length = document.getElementById(target.id).value.length;
        if (length === target.maxLength) {
            target.style.color = 'red';
        } else {
            target.style.color = 'black';
        }
        console.log('in validator', length);
    };

    // add error logic empty/blank/invalid (too long)/missing "title" or "owner" input
    // add color changing logic for 4 buttons, only in frontend, for card components being displayed
    //axios.delete for delete selected board button
    //
    return (
        <div>
            <h3>Select Board to Display:</h3>
            <select>
                <option>{Board.title}</option>
            </select>
            <h3>Create New Board</h3>
            <form className='BoardForm'>
                <label>Board Title:</label>
                <input id='board-title-input' type='text' maxLength='5' onChange={(event) => {lengthValidator(event.target)}}></input>
                <label>Owner's Name:</label>
                <input id='owner-name-input' type='text' maxLength='30' onChange={(event) => {lengthValidator(event.target)}}></input>
                <button>Submit New Board</button>
            </form>
            <h3>Create New Card</h3>
            <form className='CardForm'>
                <input id='card-message-input' type='text' maxLength='40' onChange={(event) => {lengthValidator(event.target)}}></input>
                <button>Submit New Card</button>
            </form>
            <h3>Select Color of Cards:</h3>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button>Delete Selected Board</button>
        </div>
    );
};

export default SidePanel;