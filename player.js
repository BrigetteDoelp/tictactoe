class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
    this.retrieveWinsFromStorage()
  }
  saveWinsToStorage() {
    localStorage.setItem(`storedP${this.id}Wins`, this.wins)
  }
  retrieveWinsFromStorage() {
    var retrievedStoredWins = localStorage.getItem(`storedP${this.id}Wins`)
    if (retrievedStoredWins !== null) {
      this.wins = retrievedStoredWins
    }
  }
};



//🖤 ☠️
