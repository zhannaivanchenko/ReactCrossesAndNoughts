import "./Header.css";

function Paragraph({ children }) {
    return <p className='instructionsText instructionsRow'>{children}</p>
}

export function Header() {
    return (
        <div>
            <h2 className='header'>Noughts and Crosses</h2>

            <div className='titleRow'>
                <p className='instructionsTitle'>Instructions</p>

                <Paragraph>
                    <p className='instructionsText instructionsRow'>To start the game, click on empty square in the chart.</p>
                </Paragraph>

                <Paragraph>
                    <p className='instructionsText instructionsRow'> In order to win the game, you must place three of your marks in a horizontal, vertical, or diagonal row.</p>
                </Paragraph>
            </div>
        </div>
    )
}

