/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const hearts = document.querySelectorAll(".tries img");
const keys = document.getElementsByClassName('key');
const startScreenOverlay = document.getElementById('overlay');
const tries = document.querySelector('.tries');

class Game {
  constructor(game) {
    this.missed = 0;
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

 

  handleInteraction(btn) {
    btn.disabled = true;
      if (this.activePhrase.checkLetter(btn.innerHTML)) {
    btn.classList.add("chosen");
    this.activePhrase.showMatchedLetter(btn.innerHTML);
    this.checkForWin();
       } else{
          btn.classList.add('wrong');
          this.removeLife();
       }
  
  }


removeLife(){
  hearts[hearts.length - 1 - this.missed].src = "../images/lostHeart.png";
  this.missed++;
  
  if(this.missed === 5){
    this.gameOver('lose');

  }
}  

checkForWin() {
  const phraseLetters = document.getElementsByClassName('letter');
  let lettersShown = 0;
  for (let i = 0; i < phraseLetters.length; i++) {
      const e = phraseLetters[i];
      if (e.classList.contains('show')) {
          lettersShown++;
      }
  }

  if (lettersShown === phraseLetters.length ) {
      this.gameOver('win');
  }
}

/**
* this is called when the game is either won/lost
* @param {String} result 
* displays the startScreenOverlay again with a different msg or style depending on the result
*/

gameOver(result){
  const gameOverMessage = document.getElementById('game-over-message');
  startScreenOverlay.style.display = 'flex';

  if(result === 'win'){
    gameOverMessage.innerHTML = 'You won';
    startScreenOverlay.className = 'win';
  }else if(result === 'lose'){
    gameOverMessage.innerHTML = 'Failure';
    startScreenOverlay.className = 'lose';
  }

}
}
