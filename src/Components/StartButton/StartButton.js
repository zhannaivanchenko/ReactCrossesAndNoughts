import React from 'react';
import './StartButton.css';

export function StartButton(props) {
       
    const handleButtonClick = () => {        
        if (!props.isHandlerSet) {
            window.removeEventListener('click', props.listenerFunction); }
        props.cleanDb(); 
        props.cleanIsAllNulls();
        window.addEventListener('click', props.listenerFunction);
        props.updateHandlerSet();
    };

    return (
            <div className='startRow'>
                <button type='button' id='buttonStart' onClick= { handleButtonClick } >
                    Reset Game!</button>
             </div>
        )
    
}