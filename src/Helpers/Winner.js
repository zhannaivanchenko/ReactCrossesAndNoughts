
class WinnerCheck {
    
        getColumns(matrix) {
            let columnsArray = [];
            columnsArray = matrix.map((column, i)=> column.map((cell, j)=> matrix[j][i]));
            return columnsArray;
        }
          
        getDiagonals(matrix) {
            const size = matrix.length;  
            const diagonalsArray = [[],[]];
              for (let i=0; i<size; i++) {
                for (let j=0; j<size; j++) {
                  if (i === j) { diagonalsArray[0].push(matrix[i][j]); 
                  }}
              }
              for (let i= size-1; i>=0; i-- ) {
                for (let j=0; j<size; j++) {
                  if ((i + j) === (size - 1)) { diagonalsArray[1].push(matrix[i][j]);
                }}
              }
            return diagonalsArray;  
        }   
        
        checkWinner(matrixToCheck) {   
          const isCrossWin = matrixToCheck.some(row => row.every(cell => cell === 1));
          const isNoughtWin = matrixToCheck.some(row => row.every(cell => cell === 2));
            if (isCrossWin) { return  'cross'}
            if (isNoughtWin) { return 'nought' } 
            
            return '';
        }
        
        checkWinnerCombinations(matrix) {
          const columns = this.getColumns(matrix);
          const diagonals = this.getDiagonals(matrix);
          
          return  this.checkWinner(matrix) 
          || this.checkWinner(columns) 
          || this.checkWinner(diagonals) 
          || '';
        }    
}

export const winnerCheck = new WinnerCheck();