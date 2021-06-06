import React, { useState } from 'react';
import './Matrix.css';
import { GetTableView } from "../GetTableView/GetTableView";
import { nought } from '../../Helpers/Nought';
import { winnerCheck } from '../../Helpers/Winner';
import { GameStatus } from '../GameStatus/GameStatus';
import { StartButton } from '../StartButton/StartButton';

export function Matrix(props) {
    const { matrix, cleanDb, setNewDb, putCross } = props;
    const [winner, setWinner] = useState('');
    const [isSpace, setIsSpace] = useState(true);

    const cleanWinner = () => {
        setWinner('');
        setIsSpace(true);
    }
    const isSpaceToGo = (matrix) => {
        return matrix.some(row => row.some((cell) => cell === 0));
    }

    const handleClick = ({ target }) => {
        const { x, y } = target.dataset;
        const isPutCross = putCross(x, y);
        if (isPutCross) {
            const isWinnerDefined = winner !== '';
            let winnerSign = winnerCheck.checkWinnerCombinations(matrix);
            const isSpaceStillExists = isSpaceToGo(matrix);

            if (winnerSign !== isWinnerDefined) { setWinner(winnerSign) }
            if (!isSpaceStillExists) { setIsSpace(false); }
            if (winnerSign === '' && isSpaceStillExists) {
                nought.putNought(matrix, setNewDb);
                winnerSign = winnerCheck.checkWinnerCombinations(matrix);
                if (winnerSign !== isWinnerDefined) { setWinner(winnerSign) }
            }
        }
    }

    return (
        <div>
            <GetTableView matrix={matrix} handleClick={handleClick} winner={winner} />
            <GameStatus winner={winner} isSpace={isSpace} />
            <StartButton cleanDb={cleanDb} cleanWinner={cleanWinner} />
        </div>)
}
