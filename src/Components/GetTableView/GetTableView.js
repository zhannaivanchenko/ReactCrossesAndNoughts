import React from 'react';

function CrossAndNoughtBody({ matrix, winner, handleClick }) {
    return matrix.map((row, indexRow) => (
        <tr className='chartRow' key={`${indexRow}`}>
            {row.map((cell, indexCell) => (
               <td 
               className='chartCell' 
               id={`${indexRow}_${indexCell}`}
               key={`${indexRow}_${indexCell}`}
               onClick={winner === '' ? handleClick : undefined}
               data-x={indexRow} 
               data-y={indexCell}
               data-sign={
                   cell === 1 ? 'cross' :
                   cell === 2 ? 'nought' : 0}
           ></td>))}
        </tr> 
    ))
}

export function GetTableView(props) {
    const { matrix, winner, handleClick } = props;
    
    return (
        <div className='playChart' id='chartTable' >
            <table className='playChartTable'>
                <tbody>
                    <CrossAndNoughtBody 
                        matrix={matrix}
                        winner={winner}
                        handleClick={handleClick}
                    />
                </tbody>
            </table>
        </div>
    );
}