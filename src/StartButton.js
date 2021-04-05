import React from 'react';
import './StartButton.css';

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
       this.props.cleanDb();
        
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