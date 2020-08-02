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

function updateSpace(event) {
  var spaceClicked = newGame.clickLogic(event.target)
}
//if innerHTML == either token, return. have this be a check space function
//for checking game board for wins, have to update the this.board key value pair as well
//spaces are going to be changed to x or o. dual win conditions for each one?? o jeeez
//add ID to space when adding token?? jesus. idk. gonna have to experiment
//then win conditions are going to be a Mess lol oh jeez.








// .
