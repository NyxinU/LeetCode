const exist = (board, word) => {
  
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < word[0].length; j++) {
      if (existHelper(board, j, i, word, 0)) return true;
    }    
  }
  return false;
};

const existHelper = (board, j, i, word, idx) => {
  if (idx === word.length) return true;
  if (j < 0 || i < 0 || j === board.length || i === board[j].length) return false;
  if (board[j][i] !== word[idx]) return false;

  let dfs = existHelper(board, j, i + 1, word, idx + 1)
    || existHelper(board, j, i - 1, word, idx + 1)
    || existHelper(board, j + 1, i, word, idx + 1)
    || existHelper(board, j - 1, i, word, idx + 1);

    return dfs;
};



const board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
];

const word = "ABCCED";
console.log(exist(board, word));