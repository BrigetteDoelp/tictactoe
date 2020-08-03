class Game {
  constructor() {
    this.p1 = new Player(1, '☠️');
    this.p2 = new Player(2, '🎃');
    this.currentPlayer = this.p1;
    this.board = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    this.p1Turn = true;
  }

  updateSpace(index) {
    this.board[index] = this.currentPlayer === this.p1
    this.checkForWin()
    this.updateTurn()
  };

  updateTurn() {
    this.p1Turn = !this.p1Turn
    this.currentPlayer = this.p1Turn ? this.p1 : this.p2
  }

  checkForWin() {
    for (var i = 0; i < 3; i++) {
      if (this.horizontalWin(i) || this.verticalWin(i)) {
        console.log(true)
        this.updatePlayerWins()
        return true
      }
    }
      if (this.diagonalWinLTR() || this.diagonalWinRTL()) {
        console.log(true)
        this.updatePlayerWins()
        return true
      }
      console.log(false)
      return false
  };

  horizontalWin(row) {
    var indexRow = row * 3;
    for (var i = indexRow; i < indexRow + 3; i++) {
      if (this.board[i] !== this.p1Turn) {
        return false
      }
    }
    return true
  };

  verticalWin(column) {
    for (var i = column; i < column + 7; i += 3) {
      if (this.board[i] !== this.p1Turn) {
        return false;
      }
    }
    return true;
  };

  diagonalWinLTR() {
    for (var i = 0; i < this.board.length; i += 4) {
      if (this.board[i] !== this.p1Turn) {
          return false
        }
      }
      return true
   };

    diagonalWinRTL() {
      for (var i = 2; i < 7; i += 2) {
        if (this.board[i] !== this.p1Turn) {
            return false
          }
        }
        return true
    };

    updatePlayerWins() {
      this.currentPlayer.wins++
    }


};


//
