import React from 'react';
import './Matrix.css';
import { GetTableView } from "./getTableView";


export class Matrix extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(e) {
        const size = 3;
        const cellNumber = e.target.id -1;
        const x = Math.floor(cellNumber / size);
        const y = cellNumber % size;
        const matrix = this.props.getDb();
        if ( matrix[x][y] === 0) {
            this.props.setDb(x, y, 1); 
        }   
    }
   
    render() {
        const matrix = this.props.getDb();
        const playTable = GetTableView(matrix);
        
        return (
            <div className ='playChart' id='chartTable' onClick = { this.handleClick } >
               { playTable } 
            </div>
            )
    }

}