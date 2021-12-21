import React from 'react';
import Board from './components/Board';

const SidePanel = () => {

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
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button>Submit New Card</button>
            </form>
            <button>Delete Selected Board</button>
        </div>
    );
};

export default SidePanel;