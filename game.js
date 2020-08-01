class Game {
  constructor() {
    this.board = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  }

  gameLogic(clickedSpace) {
    for (var i = 0; i < this.board.length; i++) {
      for (var z = 0; z < gameSpace.length; z++) {
        if (clickedSpace.classList.contains(this.board[i])) {
          console.log(this.board[i]);
          console.log(gameSpace[i]);
        }
      }
    }
  };




}
