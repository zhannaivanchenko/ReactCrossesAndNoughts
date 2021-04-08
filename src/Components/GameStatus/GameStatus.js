import React from 'react';
import './GameStatus.css';


export class GameStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            statusMessage : 'Good luck!',
            }
    }
    
    handleWonStatus() {
        this.setState({ statusMessage : 'You won! Play again?' })
    }

    handleLostStatus() {
        this.setState({ statusMessage : 'Computer won! Play again?'})
    }
    readWinner(sign) {
        if (sign === 'cross') { this.handleWonStatus() }
        if (sign === 'nought') { this.handleLostStatus() } 
        if (sign === '') { this.setState({ statusMessage : 'Good luck!' })}
    }

    defineClassName() {
        switch (this.state.statusMessage) {
            case 'You won! Play again?' : return 'wonStatus';
            case 'Computer won! Play again?' : return 'lostStatus';
            default : return 'newStatus';
        }
    }
    handleNoPlaceToGo() {
        if (this.props.isAllNulls === true ) {
            this.setState({ statusMessage : "No place to go! Restart the game!"})
        } else {
            this.setState({ statusMessage : "Good Luck!"})
        }
    } 

    shouldComponentUpdate(nextProps, nextState) {
        console.log('nextProps =', nextProps);
        console.log('nextState=', nextState);
        if (this.props.winner !== nextProps.winner) {
            this.readWinner(nextProps.winner);
            return true;
        }
            
        if (this.props.isAllNulls !== nextProps.isAllNulls)  {
          this.handleNoPlaceToGo();
            return true
        }

        if (this.state.statusMessage !== nextState.statusMessage) {
            return true;
        }
       
        return false;
        } 

    render() {
     
        return (
            <div className='statusRow'>
                <h2 id='gameStatus' className= { this.defineClassName() } >
                    { this.state.statusMessage }</h2>
                  
            </div>
        )
    }
}