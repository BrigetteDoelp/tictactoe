class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
    this.retrieveWinsFromStorage()
  }
  saveWinsToStorage() {

  }
  retrieveWinsFromStorage() {
    var storedPlayer = localStorage.getItem(`storedP${this.id}`)
    if (storedPlayer !== null) {
      this.wins = storedPlayer
    }
  }
};



//🖤 ☠️
