class Game {
  constructor() {
    this.p1 = new Player(1, '☠️');
    this.p2 = new Player(2, '🎃');
    this.currentPlayer = this.p1;
    this.board = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    this.p1Turn = true;
    this.messages = {
      p1Turn: `🕸It\'s ${this.p1.token}'s turn!🕸`,
      p2Turn: `🕸It\'s ${this.p2.token}'s turn!🕸`,
      p1Wins: `🕸Player ${this.p1.token}'s wins!🕸`,
      p2Wins: `🕸Player ${this.p2.token}'s wins!🕸`,
      draw: '🌒💫🔮🦇It\'s a draw!🦇🔮💫🌒',
    };
    this.currentMessage = this.messages.p1Turn;
  }

  updateSpace(index, onReset) {
    if (typeof this.board[index] === 'boolean') {
      return
    }
    this.board[index] = (this.currentPlayer === this.p1)
    if (this.checkForWin()) {
      this.currentMessage = this.p1Turn ? this.messages.p1Wins : this.messages.p2Wins
      this.addPlayerWin()
      this.currentPlayer.saveWinsToStorage()
      this.delayReset(onReset)
      return
    } else if (this.checkForDraw()) {
      this.currentMessage = this.messages.draw
      this.delayReset(onReset)
      return
    }
    this.updateTurn()
  };

  updateTurn() {
    this.p1Turn = !this.p1Turn
    this.currentPlayer = this.p1Turn ? this.p1 : this.p2
    this.currentMessage = this.p1Turn ? this.messages.p1Turn : this.messages.p2Turn
  }

  checkForWin() {
    for (var i = 0; i < 3; i++) {
      if (this.horizontalWin(i) || this.verticalWin(i)) {
        return true
      }
    }
      if (this.diagonalWinLTR() || this.diagonalWinRTL()) {
        return true
      }
      return false
  };

  checkForDraw() {
    for (var i = 0; i < this.board.length; i++) {
      if (typeof this.board[i] !== 'boolean') {
        return false
      }
    }
    return true
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

    addPlayerWin() {
      this.currentPlayer.wins++
    };

    resetGame() {
      this.currentPlayer = this.p1;
      this.board = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
      this.p1Turn = true;
      this.currentMessage = this.messages.p1Turn
    }

    delayReset(onReset) {
      setTimeout((function() {
        this.resetGame()
        onReset()
      }).bind(this), 1000)
    }

};


//
