var gameBoard = document.querySelector('.game-board');
var gameSpace = document.querySelectorAll('.space');
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

gameBoard.addEventListener('click', updateSpace);

function checkSpace(event) {
  newGame.gameLogic(event.target)
};

function updateSpace(event) {
  var spaceClicked = newGame.clickLogic(event.target)

}








// .
