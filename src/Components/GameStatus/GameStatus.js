import React from 'react';
import './GameStatus.css';

const getClassName = (sign) => {
    switch (sign) {
        case 'cross': return 'wonStatus';
        case 'nought': return 'lostStatus';
        default: return 'newStatus';
    }
}

const getStatusMessage = (sign, isSpaceToGo) => {
    if (isSpaceToGo === false && sign === '') {
        return "No place to go! Restart the game!"
    }
    switch (sign) {
        case 'cross': return 'You won! Play again?';
        case 'nought': return 'Computer won! Play again?';
        default: return 'Good Luck';
    }
}

export class GameStatus extends React.Component {

    render() {
        const { winner, isSpace } = this.props;
        const statusMessage = getStatusMessage(winner, isSpace);
        const className = getClassName(winner);

        return (
            <div className='statusRow'>
                <h2 id='gameStatus' className={className} >{statusMessage} </h2>
            </div>
        )
    }
}