import React, { useEffect } from 'react';
import Board from './Board';

const SidePanel = () => {
    //axios.post for submit buttons for board and card
    // add error logic for going over 40 characters in card's message
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
                <input type='text'></input>
                <label>Owner's Name:</label>
                <input type='text'></input>
                <button>Submit New Board</button>
            </form>
            <h3>Create New Card</h3>
            <form className='CardForm'>
                <input type='text'></input>
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