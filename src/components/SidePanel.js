import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Board from './Board';
import './SidePanel.css';

// TO DO
// create a piece of state associated with currently selected board

const makeEmptyBoardFields = () => {
    return {
        title: '',
        owner: ''
    };
};

const makeEmptyCardFields = () => {
    return {
        message: ''
    };
};

const SidePanel = (props) => {
    //generate drop down menu of created boards

    const [currentBoards, setCurrentBoards] = useState([]);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
            .then((response) => {
                const boards = response.data[0]
                setCurrentBoards((prevState) => {
                    prevState = boards
                });
                const boardList = document.getElementById('board-list')

                for (let board of boards) {
                    let newBoard = document.createElement('option')
                    newBoard.value = board.board_id
                    newBoard.id = board.board_id
                    const boardTitle = document.createTextNode(board.title);
                    newBoard.appendChild(boardTitle)
                    boardList.appendChild(newBoard)
                }
            })
            .catch((error) => console.log(error));
    }, []);

    //axios.post for submit buttons for board and card
    const onSubmitBoard = (event) => {
        event.preventDefault();

        axios
            .post(`${process.env.REACT_APP_BACKEND_URL}/boards`, {
                title: boardFields.title, //find a way to use form field info here
                owner: boardFields.owner //find a way to use form field info here
            })
            .then((response) => {
                setBoardFields(makeEmptyBoardFields());
                console.log(response);
            })
            .catch((error) => console.log(error));
    };

    const onSubmitCard = (event) => {
        event.preventDefault();

        axios
            .post(`${process.env.REACT_APP_BACKEND_URL}/boards/${props.selectedBoard}/cards`, {
                message: cardFields.message
            })
            .then ((response) => {
                setCardFields(makeEmptyCardFields());
                console.log(response);
            })
            .catch((error) => console.log(error));
    };
    // add error logic for going over 40 characters in card's message
    const lengthValidator = (target) => {
        const length = document.getElementById(target.id).value.length;
        if (length === target.maxLength) {
            target.style.color = 'red';
        } else {
            target.style.color = 'black';
        }
    };

    //const BoardForm = ({onBoardAdded}) => {};

    const [boardFields, setBoardFields] = useState(makeEmptyBoardFields());

    const handleTitleChanged = (event) => {
        setBoardFields({...boardFields, title: event.target.value});
        lengthValidator(event.target);
    };

    const handleOwnerChanged = (event) => {
        setBoardFields({...boardFields, owner: event.target.value});
        lengthValidator(event.target);
    };

    //const CardForm = ({onCardAdded}) => {};
    const [cardFields, setCardFields] = useState(makeEmptyCardFields());

    const handleMessageChanged = (event) => {
        setCardFields({...cardFields, message: event.target.value});
        lengthValidator(event.target);
    };

    // add error logic empty/blank/invalid (too long)/missing "title" or "owner" input
    // add color changing logic for 4 buttons, only in frontend, for card components being displayed
    //axios.delete for delete selected board button

    // should go in App.js
    const onSelectColor = (event) => {

    };

    const onDeleteBoard = () => {
        axios
        .delete(`${process.env.REACT_APP_BACKEND_URL}/boards/${props.selectedBoard}`)
        .then((response) => {
            console.log(response);
            // ask Michelle to include board_id in success response message
            // const deletedBoard = document.getElementById(board_id);
            // deletedBoard.remove();
        })
        .catch((error) => console.log(error));
    };

    return (
        <div className='sidepanel'>
            <h3>Select Board to Display:</h3>
            <select id='board-list' onChange={props.onSelectBoard}>
            </select>
            <h3>Create New Board</h3>
            <form className='BoardForm' onSubmit={onSubmitBoard}>
                <label>Board Title:</label>
                <input 
                    id='board-title-input'
                    name='title' 
                    type='text' 
                    maxLength='25' 
                    value ={boardFields.title} 
                    onChange={handleTitleChanged}
                />
                <label>Owner's Name:</label>
                <input 
                    id='owner-name-input' 
                    name='owner'
                    type='text' 
                    maxLength='30' 
                    value={boardFields.owner} 
                    onChange={handleOwnerChanged}
                />
                <input type='submit' value='Submit New Board' />
            </form>
            <h3>Create New Card</h3>
            <form className='CardForm' onSubmit={onSubmitCard}>
                <input 
                    id='card-message-input' 
                    name='message'
                    type='text' 
                    maxLength='40' 
                    value={cardFields.message}
                    onChange={handleMessageChanged}
                />
                <input type='submit' value='Submit New Card' onSubmit={(event) => {event.preventDefault();}}/>
            </form>
            <h3>Select Color of Cards:</h3>
            <div id='color-buttons' onClick={onSelectColor}>
                <button id='1b'>1</button>
                <button id='2b'>2</button>
                <button id='3b'>3</button>
                <button id='4b'>4</button>
            </div>
            <button onClick={onDeleteBoard}>Delete Selected Board</button>
        </div>
    );
};

export default SidePanel;