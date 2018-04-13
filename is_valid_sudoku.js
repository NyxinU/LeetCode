const isValidSudoku = (board) => {
  const visited = {};

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let num = board[i][j];
      if (num !== '.') {
        if (visited[num]) {
          if (visited[num]['r'][i] || visited[num]['c'][j] || visited[num]['q'][quardrantFinder(i,j)]) {
            return false;
          }
        } else {
          visited[num] = {'r':{}, 'c':{}, 'q':{}};
        }
        visited[num]['r'][i] = true;
        visited[num]['c'][j] = true;
        visited[num]['q'][quardrantFinder(i,j)] = true;
      }  
    }  
  }
  return true;
};

const quardrantFinder = (i,j) => {
  let quad = 0;

  if (j > 2 && j < 6) {
    quad += 1;
  } else if (j > 5) {
    quad += 2;
  }

  if (i > 2 && i < 6) {
    quad += 3;
  } else if (i > 5) {
    quad += 6;
  }

  return quad;
};

console.log(isValidSudoku([[".", ".", "5", ".", ".", ".", ".", ".", "6"], 
                           [".", ".", ".", ".", "1", "4", ".", ".", "."], 
                           [".", ".", ".", ".", ".", ".", ".", ".", "."], 
                           [".", ".", ".", ".", ".", "9", "2", ".", "."], 
                           ["5", ".", ".", ".", ".", "2", ".", ".", "."], 
                           [".", ".", ".", ".", ".", ".", ".", "3", "."], 
                           [".", ".", ".", "5", "4", ".", ".", ".", "."], 
                           ["3", ".", ".", ".", ".", ".", "4", "2", "."], 
                           [".", ".", ".", "2", "7", ".", "6", ".", "."]]));