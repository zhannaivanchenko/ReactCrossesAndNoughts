import React from 'react';
import './GameStatus.css';

export class GameStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = { status : ''}
    }
    
    handleWonStatus() {
        this.setState({ status : 'You won! Play again?' })
    }

    handleLostStatus() {
        this.setState({ status : 'Computer won! Play again?'})
    }

    defineClassName() {
        switch (this.state.status) {
            case 'You won! Play again?' : return 'wonStatus';
            case 'Computer won! Play again?' : return 'lostStatus';
            default : return 'newStatus';
        }
    }

    render() {
        return (
            <div className='statusRow'>
                <h2 id='gameStatus' className= { this.defineClassName() } >
                    { this.state.status }</h2>
            </div>
        )
    }
}