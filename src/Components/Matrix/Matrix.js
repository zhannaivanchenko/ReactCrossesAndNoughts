import React, { useState, useEffect } from 'react';
import './Matrix.css';
import { GetTableView } from "../GetTableView/GetTableView";
import { nought } from '../../Helpers/Nought';
import { winnerCheck } from '../../Helpers/Winner';
import { GameStatus } from '../GameStatus/GameStatus';
import { StartButton } from '../StartButton/StartButton';

export function Matrix(props) {
    const [ winner, setWinner ] = useState('');
    const [ isAllNulls, setIsAllNulls ] = useState();
    
    useEffect(() => {
        if (winner === '') {
            document.addEventListener('click', handleClick);
            return() => {
                document.removeEventListener('click', handleClick);
            }
        } 
    }, );
    
    const checkIfGameOver = (winnerSign) => {
        if (winnerSign === 'cross') {
            document.removeEventListener('click', handleClick);
            setWinner('cross');
        }
        if (winnerSign === 'nought') {
            document.removeEventListener('click', handleClick);
            setWinner('nought');
        }
        if (winnerSign === '') {
            setWinner('');
        }
    }

    const checkIfNoPlaceToGo = (matrix) => {
        let isAllNull = false;
        matrix.forEach(row => row.forEach(cell => {
            if (cell === 0) { isAllNull = true;} } ));
       
        if (!isAllNull) { setIsAllNulls(false);} 
        
        return isAllNull;
    } 

    const cleanIsAllNulls = () => {
        setWinner('');
        setIsAllNulls(true);
    }

    const handleClick = ({ target }) => {
        if (!target.outerHTML.includes('table') && 
        target.outerHTML.includes('chartCell')) { 
            const size = 3;
            const cellNumber = target.id;
            const x = Math.floor(cellNumber / size);
            const y = cellNumber % size;
            const matrix = props.getDb();
            if ( matrix[x][y] === 0 ) {
                props.setNewDb(x, y, 1);
                let winnerSign = winnerCheck.checkWinnerCombinations(matrix);
                checkIfGameOver(winnerSign);
                if (winner === '') { 
                    let isAllNull = checkIfNoPlaceToGo(matrix);
                    if (!isAllNull) {
                        document.removeEventListener('click', handleClick);
                        return;
                    }
    
                    if (isAllNull) { 
                    nought.putNought(matrix, props.setNewDb);
                    winnerSign = winnerCheck.checkWinnerCombinations(matrix);
                    checkIfGameOver(winnerSign);
                    isAllNull = checkIfNoPlaceToGo(matrix) ;
                    }
                }
            }
        
            else {
                alert('This cell is clicked! Click another one!')
            }
        }      
    }
    
   return (
            <div>
               <div className ='playChart' id='chartTable' >
                    { GetTableView(props.getDb()) } 
                </div>
                <GameStatus winner={ winner } isAllNulls={ isAllNulls } />
                <StartButton cleanDb={ props.cleanDb } cleanIsAllNulls={ cleanIsAllNulls } />
          </div>)
    }
