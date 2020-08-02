class Game {
  constructor() {
    this.p1 = new Player(1, '☠️');
    this.p2 = new Player(2, '🖤');
    this.board = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    this.turn = true;
    this.winConditions = [];
  }

  clickLogic(clickedSpace) {
    for (var i = 0; i < this.board.length; i++) {
      for (var z = 0; z < gameSpace.length; z++) {
        if (clickedSpace.classList.contains(this.board[i])) {
          // console.log(this.board[i]);
          // console.log(gameSpace[i]);
          gameSpace[i].innerHTML = this.toggleTurn()
        }
      }
    }
  };

  toggleTurn() {
    this.turn = !this.turn
    if (this.turn) {
      return newGame.p1.token
    } else {
      return newGame.p2.token
    }
  }

  // markGameBoard() {
  //   gameSpace[i].innerText = '☠️'
  // }




}
