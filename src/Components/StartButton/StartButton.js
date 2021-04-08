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
        if (!this.props.isHandlerSet) {
            window.removeEventListener('click', this.props.listenerFunction); }
        this.props.cleanDb(); 
        this.props.cleanIsAllNulls();
        window.addEventListener('click', this.props.listenerFunction);
        this.props.updateHandlerSet();
    };

    render() {
        return (
            <div className='startRow'>
                <button type='button' id='buttonStart' onClick= { this.handleButtonClick } >
                    { this.state.message }</button>
             </div>
        )
    }
}