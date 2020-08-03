var gameBoard = document.querySelector('.game-board');
var gameSpaces = document.querySelectorAll('.space');
//potentially remove below
var topLeft = document.querySelector('.one');
var topMid = document.querySelector('.tm');
var topRight = document.querySelector('.tr');
var midLeft = document.querySelector('.ml');
var midMid = document.querySelector('.mm');
var midRight = document.querySelector('.mr');
var botLeft = document.querySelector('.bl');
var botMid = document.querySelector('.bm');
var botRight = document.querySelector('.br');

var newGame = new Game;

gameBoard.addEventListener('click', updateSpaceClicked);

function updateBoard() {
  for (var i = 0; i < newGame.board.length; i++) {
    if (typeof newGame.board[i] === 'boolean') {
      gameSpaces[i].innerHTML = newGame.board[i] ? newGame.p1.token : newGame.p2.token
    }
  }
  // var spaceClicked = newGame.clickLogic(event.target)
  // event.target.innerHTML = newGame.toggleTurn()
}

function updateSpaceClicked() {
  for (var i = 0; i < gameSpaces.length; i++) {
    
  }
  newGame.updateSpace()
  updateBoard()
}

//add ID to space when adding token?? jesus. idk. gonna have to experiment
//then win conditions are going to be a Mess lol oh jeez.








// .
