import React from 'react';
import './GameStatus.css';

const getClassName = (sign) => {
    switch(sign) {
        case 'cross' :  return 'wonStatus';
        case 'nought' : return 'lostStatus';
        default : return 'newStatus';
    }
}

const getStatusMessage = (sign, isAllNulls) => {
    if (isAllNulls === false) {
        return "No place to go! Restart the game!"
    } 
    switch(sign) {
        case 'cross' : return 'You won! Play again?';
        case 'nought' : return 'Computer won! Play again?';
        default : return 'Good Luck';
    }
}

export class GameStatus extends React.Component {
    
    render() {
     const statusMessage = getStatusMessage(this.props.winner, this.props.isAllNulls);
     const className = getClassName(this.props.winner);

     return (
            <div className='statusRow'>
                <h2 id='gameStatus' className= { className} >{ statusMessage } </h2>    
            </div>
        )
    }
}