/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const hearts = document.querySelectorAll(".tries img");
const keys = document.getElementsByClassName('key');

class Game {
  constructor(game) {
    this.game = game;
    this.phrases = [
      new Phrase("Alex is a pro at coding"),
      new Phrase("clouds on the top of icloud"),
      new Phrase("not enough memory"),
      new Phrase("in my phone"),
      new Phrase("another time my phone said"),
    ];
    this.activePhrase = null;
  }
  /**
   * random phrase from the phrases array
   * @returns {String} phrase
   */
  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * 5)];
  }
  /**
   * Begins game by selecting a random phrase and displaying it to user
   */
  startGame() {
    createLi.innerHTML = "";
    for (const key of keys) {
      key.disabled = false;
      key.classList = "key";
    }
    this.missed = 0;
    for (let heart of hearts) {
      heart.src = "images/liveHeart.png";
    }
    hidesGame.style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

}
