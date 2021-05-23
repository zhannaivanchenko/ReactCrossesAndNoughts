import './App.css';
import { Matrix } from "./Components/Matrix/Matrix";
import React, { useState } from 'react';
import { Header } from "./Components/Header/Header";

const createBlankTable = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

export function App() {
  const [ db, setDb ] = useState(JSON.parse(JSON.stringify(createBlankTable)));

  const setNewDb = (x, y, value) => {
    let newDb = [...db];
    newDb[x][y] = value;
    setDb(newDb);
  };
 
  const cleanDb = () => {
    const newBlankTable = JSON.parse(JSON.stringify(createBlankTable));
    setDb(newBlankTable);
  };

  const putCross = (x, y) => {     
    const isCellEmpty = db[x][y] === 0;
    if (!isCellEmpty) {  alert('This cell is clicked! Click another one!') }
    if ( isCellEmpty ) {
      setNewDb(x, y, 1);
    }      
  }

  return (
      <div>
        <Header /> 
        <Matrix matrix={ [...db] } putCross={putCross} cleanDb={cleanDb} setNewDb={setNewDb} />
      </div>
    );
};


