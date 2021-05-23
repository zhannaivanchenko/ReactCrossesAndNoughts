import React from 'react';

 export function GetTableView(props) {
    const { matrix, winner, handleClick } = props;
    let i = 1;
    let table = matrix.map((row, indexRow) => { 
        let cells = row.map((cell, indexCell) => {
            i++;
            return <td className='chartCell' id={`${i}`} key={`${i}`}  
            onClick={ winner === '' ? handleClick : undefined } 
            data-x={indexRow} data-y={indexCell} 
            data-sign={ 
                cell === 1 ? 'cross' :
                cell === 2 ? 'nought' : 0 } 
                ></td>;
        })
       const trs = (
        <tr className='chartRow' key={`${i}`}>
                { (cells) }
        </tr>)
    return trs;
    });
    
    return (
        <div className ='playChart' id='chartTable' >
            <table className='playChartTable'> 
                <tbody>
                    { table }
                </tbody>
            </table>
        </div>);
}