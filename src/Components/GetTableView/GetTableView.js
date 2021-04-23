import React from 'react';

 export function GetTableView(matrix) {
    let i = -1;
    let table = matrix.map((row, indexRow) => { 
        let cells = row.map((cell, indexCell) => {
            i++;
            return <td className='chartCell' id={`${i}`} key={`${i}`}  data-sign={ 
                cell === 1 ? 'cross' :
                cell === 2 ? 'nought' : 0 } ></td>;
        })
       const trs = (
        <tr className='chartRow' key={`${i}`}>
                { (cells) }
        </tr>)
    return trs;
    });
    
    return (
        <table className='playChartTable'> 
            <tbody>
                { table }
            </tbody>
        </table>);
}