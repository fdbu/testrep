let players = ['x', 'o'];
let activePlayer = 0;
let board = [];
function startGame() {
  board = [];
  let boardsize = prompt ("Введите размер поля");
  for (let i = 0; i < boardsize; i++) {
board[i] = [];
  for (let j = 0; j < boardsize; j++) {
   board[i].push(''); 
  };
  };
activePlayer = 0;
alert('Первый ходит '+ players[activePlayer]);
renderBoard(board);
};
function click(row,col) {
board[row][col] = players[activePlayer];
renderBoard(board);
if (checkWin() == true) {
  showWinner(activePlayer);
}
if (activePlayer == 0) {
  activePlayer = 1
} else {
  activePlayer = 0
};
}
function checkRow(){
  let fullLine = 0;
  for (let h = 0; h < board.length; h++) {
	for (let v = 0; v < board[h].length; v++) {
		if (board[h][v] === players[activePlayer]) {
      fullLine++;
    }
    if (fullLine == board.length) {
      return true;
    }
	}
  fullLine = 0;
}
};
function checkColumn() {
  let fullLine = 0;
  for (let h = 0; h < board.length; h++) {
	for (let v = 0; v < board[h].length; v++) {
		if (board[v][h] === players[activePlayer]) {
      fullLine++;
    }
    if (fullLine == board.length) {
      return true;
    }
	}
  fullLine = 0;
}
};
function checkDiagonal() {
let fullLine = 0;
  for (let h = 0; h < board.length; h++) {
   if (board[h][h] === players[activePlayer]) {
      fullLine++;
    } 
    if (fullLine == board.length) {
       return true;
  }
  }
  fullLine = 0;
  let t = board.length -1
	for (let v = t; v >= 0; v--) {
		if (board[t - v][v] === players[activePlayer]) {
      fullLine++;
    }
    if (fullLine == board.length) {
      return true;
    }
	}
};
function checkWin() {
if (checkRow() == true || checkColumn() == true || checkDiagonal() == true) {
  return true;
}
}