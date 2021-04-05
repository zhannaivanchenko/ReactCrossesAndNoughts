import "./Header.css";

export function ShowHeader() {
    return (
        <div>
            <div className='header'>
                <h2>Noughts and Crosses</h2>
            </div>
            <div className='titleRow'>
                <p className='instructionsTitle'>Instructions</p>
            
            <div className='instructionsRow'>
                <p className='instructionsText'>To start the game, click on empty square in the chart.</p>
                <p className='instructionsText'> In order to win the game, you must place three of your marks in a horizontal, vertical, or diagonal row.</p>
                </div>
            </div>
        </div>
    )
}

