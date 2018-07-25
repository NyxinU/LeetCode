var setZeroes = function (matrix) {
  let col0 = 1;
  for (let row = 0; row < matrix.length; row++) {
    if (matrix[row][0] === 0) { col0 = 0; }
    for (let col = 1; col < matrix[row].length; col++) {
      const num = matrix[row][col];
      
      if(num === 0) {
        matrix[0][col] = matrix[row][0] = 0;
      }
    } 
  }

  for (let row = matrix.length - 1; row >= 0; row--) {
    for (let col = matrix[row].length - 1; col > 0; col--) {
      if(matrix[row][0] === 0 || matrix[0][col] === 0) {
        matrix[row][col] = 0;
      }
    }
    if (col0 === 0 ) {matrix[row][0] = 0;}
  }


  return matrix;
};

console.log(setZeroes([
  [1, 1, 1],
  [0, 1, 1],
  [1, 1, 1]
]));