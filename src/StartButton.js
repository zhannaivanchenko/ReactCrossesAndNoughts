import React from 'react';
import './StartButton.css';
import { Matrix } from './Matrix';

// import { GameStatus } from './GameStatus';

export class StartButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            message : 'Reset game!' 
        }
        this.handleButtonClick = this.handleButtonClick.bind(this)
 }    
    
    handleButtonClick() {        
       console.log('this.props.getDb=', this.props.getDb);
        const matrix = this.getDb();
        for (let i=0; i<matrix.length; i++) {
            for (let j=0; j<matrix[i].length; j++) {
                this.setDb(i, j, 0);
            }
        }
    };

    render() {
        console.log('this.props=%o', this.props);
        return (
            <div className='startRow'>
                <button type='button' id='buttonStart' onClick= { this.handleButtonClick } >
                    { this.state.message }</button>
             </div>
        )
    }
}