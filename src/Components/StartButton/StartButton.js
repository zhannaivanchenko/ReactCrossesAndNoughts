import React from 'react';
import './StartButton.css';

export function StartButton(props) {
       
    const handleButtonClick = () => {        
        props.cleanDb();
        props.cleanWinner();
    };

    return (
            <div className='startRow'>
                <button type='button' id='buttonStart' onClick= { handleButtonClick } >
                    Reset Game!</button>
             </div>
        )
    
}