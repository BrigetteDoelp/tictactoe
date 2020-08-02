class Game {
  constructor() {
    this.p1 = new Player(1, '☠️');
    this.p2 = new Player(2, '🖤');
    this.board = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    this.turn = false;
    this.winConditions = []; //[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]
  }

  clickLogic(clickedSpace) {
    for (var i = 0; i < this.board.length; i++) {
      for (var z = 0; z < gameSpace.length; z++) {
        if (clickedSpace.classList.contains(this.board[i])) {
          console.log(this.board[i]);
          console.log(gameSpace[i]);
          gameSpace[i].innerHTML = this.toggleTurn()
          this.board[i] = this.turn
          // this.checkForWin();
          console.log(this.checkForWin())
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
  };

  checkForWin() {
    for (var i = 0; i < 3; i++) {
      if(this.horizontalWin(i) || this.verticalWin(i)) {
        return true
      }
    }
    if (this.diagonalWinLTR() || this.diagonalWinRTL()) {
      return true
    }
    return false
  }


  horizontalWin(row) {
    var indexRow = row * 3;
    for (var i = indexRow; i < indexRow + 3; i++) {
      if (this.board[i] !== this.turn) {
        return false
      }
    }
    return true
  };

  verticalWin(column) {
    for (var i = column; i < column + 7; i += 3) { //OR i < column + 6
      if (this.board[i] !== this.turn) {
        return false
      }
    }
    return true
  };

  diagonalWinLTR() {
    for (var i = 0; i < this.board.length; i += 4) {
      if (this.board[i] !== this.turn) {
          return false
        }
      }
      return true
    }


    diagonalWinRTL() {
      for (var i = 2; i < 7; i += 2) {
        if (this.board[i] !== this.turn) {
            return false
          }
        }
        return true
    }


};


//
