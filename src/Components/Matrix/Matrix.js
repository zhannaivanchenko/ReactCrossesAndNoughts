import React from 'react';
import './Matrix.css';
import { GetTableView } from "../GetTableView/GetTableView";
import { nought } from '../../Helpers/Nought';
import { winner } from '../../Helpers/Winner';
import { GameStatus } from '../GameStatus/GameStatus';
import { StartButton } from '../StartButton/StartButton';

export class Matrix extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            winner : '' ,
            isAllNulls : true,
            };
        this.isHandlerSet = false;
        this.listenerFunction = '';
    }
    checkIfNoPlaceToGo(matrix) {
        let isAllNull = false;
        
        matrix.forEach(row => row.forEach(cell => {
            if (cell === 0) {
                isAllNull = true;
            }  
        } ));
        
        if(!isAllNull){
            this.setState({ isAllNulls : false });  
        } else { return; }
    } 

    cleanIsAllNulls = () => {
        this.setState({ isAllNulls : true , winner : ''})
    }
        
    updateHandlerSet = () => {
        this.isHandlerSet = !this.isHandlerSet;
    }

    handleClick = (e) => {
        if(!e.target.outerHTML.includes('table') &&
            e.target.outerHTML.includes('chartCell')) {
            const size = 3;
            const cellNumber = e.target.id;
            const x = Math.floor(cellNumber / size);
            const y = cellNumber % size;
            const matrix = this.props.getDb();
            console.log('matrix before render =', matrix);
            if ( matrix[x][y] === 0) {
                this.props.setNewDb(x, y, 1);
                let winnerSign = winner.checkWinnerCombinations(matrix);
                this.checkIfGameOver(winnerSign);
                if (winnerSign === '') { 
                    this.checkIfNoPlaceToGo(matrix);
                    if (this.state.isAllNulls) { 
                    nought.putNought(matrix, this.props.setNewDb);
                    let winnerSign = winner.checkWinnerCombinations(matrix);
                    this.checkIfGameOver(winnerSign) 
                    this.checkIfNoPlaceToGo(matrix);
            }}}
            else {
                alert('This cell is clicked! Click another one!')
            }    
         }    
    }

    checkIfGameOver(winnerSign) {
        if (winnerSign === 'cross') {
            this.setState({ winner : 'cross'})
            window.removeEventListener('click', this.listenerFunction);
            this.isHandlerSet = false;
        }
        if (winnerSign === 'nought') {
            this.setState({ winner : 'nought'})
            window.removeEventListener('click', this.listenerFunction);
            this.isHandlerSet = false;
        }
        if (winnerSign === '')  {
            this.setState({ winner : ''})
        }
    }

    componentDidMount() {
        this.listenerFunction = this.handleClick;
        window.addEventListener('click', this.listenerFunction);
        this.isHandlerSet = true;
      }
    
    render() {
        const matrix = this.props.getDb();
        const playTable = GetTableView(matrix);
        
        return (
            <div>
               <div className ='playChart' id='chartTable' >
                    { playTable } 
                </div>
                <GameStatus winner={this.state.winner} isAllNulls={this.state.isAllNulls} />
                <StartButton cleanDb={this.props.cleanDb} isHandlerSet={this.isHandlerSet}
                listenerFunction={this.listenerFunction} cleanIsAllNulls={this.cleanIsAllNulls}
                updateHandlerSet={this.updateHandlerSet} />
          </div>)
    }

}