import React from 'react';
import './Matrix.css';
import { GetTableView } from "./getTableView";
import { StartButton } from './StartButton';

export class Matrix extends React.Component {
    constructor(props) {
        super (props);
        this.state = { db : [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]}
        this.handleClick = this.handleClick.bind(this)
    }
    getDb() {
        return this.state.db;
    }

    setDb(x, y, value) {
        const db = this.state.db;
        db[x][y] = value;
        this.setState({ db });
    }
    
    handleClick(e) {
        const size = 3;
        const cellNumber = e.target.id -1;
        const x = Math.floor(cellNumber / size);
        const y = cellNumber % size;
        const matrix = this.getDb();
        if ( matrix[x][y] === 0) {
            this.setDb(x, y, 1); 
        }
        
}
   
    render() {
        const matrix = this.getDb();
        const playTable = GetTableView(matrix);
        
        return (
            <div className ='playChart' id='chartTable' onClick = { this.handleClick } >
               {/* <StartButton getDb={this.getDb} setDb={this.setDb} />  */}
               { playTable } 
            </div>
            )
    }

}