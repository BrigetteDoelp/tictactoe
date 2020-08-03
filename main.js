var gameBoard = document.querySelector('.game-board');
var gameSpaces = document.querySelectorAll('.space');

var newGame = new Game;

gameBoard.addEventListener('click', updateSpaceClicked);

function updateBoard() {
  for (var i = 0; i < newGame.board.length; i++) {
    if (typeof newGame.board[i] === 'boolean') {
      gameSpaces[i].innerHTML = newGame.board[i] ? newGame.p1.token : newGame.p2.token
    }
  }
}

function updateSpaceClicked(event) {
  for (var i = 0; i < gameSpaces.length; i++) {
    if (gameSpaces[i] === event.target) {
      newGame.updateSpace(i)
      updateBoard()
    }
  }
}








// .
