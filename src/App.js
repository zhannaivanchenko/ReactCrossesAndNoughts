import './App.css';
import { ShowHeader } from "./Components/Header/Header";
import { Matrix } from "./Components/Matrix/Matrix";
import React from 'react';


export class App extends React.Component {
  constructor(props) {
    super (props);
    this.state = { db : [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]}  
    }
  
  getDb() {
    return this.state.db;
  }

  setDb(x, y, value) {
    let db = this.state.db;
    db[x][y] = value;
    this.setState({ db });
  }

  cleanDb() {
    const matrix = this.getDb();
        for (let i=0; i<matrix.length; i++) {
            for (let j=0; j<matrix[i].length; j++) {
                this.setDb(i, j, 0);
            }
        }
  }


  render() {
    return (
      <div>
          <div>
            <ShowHeader />
          </div>
          <Matrix getDb={this.getDb.bind(this)} setDb={this.setDb.bind(this)}
          cleanDb={this.cleanDb.bind(this)} />
        
      </div>
    );
  }
 
};





