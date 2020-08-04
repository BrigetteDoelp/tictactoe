var gameBoard = document.querySelector('.game-board');
var gameSpaces = document.querySelectorAll('.space');
var p1Wins = document.querySelector('.p1wins');
var p2Wins = document.querySelector('.p2wins');

var newGame = new Game;

window.onload = updateView
gameBoard.addEventListener('click', updateSpaceClicked);

function updateView() {
  for (var i = 0; i < newGame.board.length; i++) {
    if (typeof newGame.board[i] === 'boolean') {
      gameSpaces[i].innerHTML = newGame.board[i] ? newGame.p1.token : newGame.p2.token
    } else {
      gameSpaces[i].innerHTML = ''
    }
  }
  updatePlayerWins()
};

function updateSpaceClicked(event) {
  for (var i = 0; i < gameSpaces.length; i++) {
    if (gameSpaces[i] === event.target) {
      newGame.updateSpace(i, updateView)
      updateView()
    }
  }
};

function updatePlayerWins() {
  p1Wins.innerText = `${newGame.p1.wins} wins`;
  p2Wins.innerText = `${newGame.p2.wins} wins`;
}









// .
