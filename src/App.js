import './App.css';
import { ShowHeader } from "./Components/Header/Header";
import { Matrix } from "./Components/Matrix/Matrix";
import React, { useState } from 'react';


export function App() {
  const [db, setDb] = useState([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]);

  const getDb = () => {
    return [...db];
  };

  const setNewDb = (x, y, value) => {
    let newDb = [...db];
    newDb[x][y] = value;
    setDb( newDb );
  };
 
  const cleanDb = () => {
    const matrix = [...db];
        for (let i=0; i<matrix.length; i++) {
            for (let j=0; j<matrix[i].length; j++) {
                setNewDb(i, j, 0);
            }
        }
  };

  return (
      <div>
          <div>
            <ShowHeader />
          </div>
            <Matrix getDb={getDb} setNewDb={setNewDb} cleanDb={cleanDb} />
        
      </div>
    );
  
 
};





