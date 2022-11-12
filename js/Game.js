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
  resetGame() {
    const buttons = document.getElementsByTagName("button");
    const li = document.querySelectorAll("ul");
    overlay.className = "start";
    li.innerHTML = " ";
  
    /* RESETS THE HEARTS */
    for (let i = 0; i < tries.length; i++) {
      tries[i].firstElementChild.src = "images/liveHeart.png";
    }
  
    /* RESETS LI */ 
    for (let i = 0; i < li.length; i++) {
      li[i].className = "";
      li[i].textContent = "";
    }
  
    /* RESETS THE CHOSEN KEYBOARD KEYS */
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].className = "";
      buttons[i].disabled = false;
    }
  const phrArr = this.getRandomPhrase(this.phrases);
  this.addPhraseToDisplay =phrArr;
  }

  handleInteraction(btn) {
    btn.disabled = true;
      if (this.activePhrase.checkLetter(btn.innerHTML)) {
    btn.classList.add("chosen");
    this.activePhrase.showMatchedLetter(btn.innerHTML);
    this.checkForWin;
       } else{
          btn.classList.add('wrong');
          this.removeLife();
       }
  
  }


removeLife(){
  hearts[hearts.length - 1 - this.missed].src = "images/lostHeart.png";
  this.missed++;
  
  if(this.missed === 5){
    this.gameOver('lose');

  }
}  

checkForWin() {
  // get all hidden items
  const hiddenItems = document.getElementsByClassName('hide');
  // check if the hidden items length is empty
  if (hiddenItems.length === 0) {
    return true
  } else {
    return false
  }
}

/**
* this is called when the game is either won/lost
* @param {String} result 
* displays the startScreenOverlay again with a different msg or style depending on the result
*/

gameOver(result){

  if(result === 'win'){
    overlay.classList.add('win');
    overlay.style.display ='flex';
    overlay.children[0].textContent = 'You won';
    overlay.children[1].textContent ='restart';
    this.resetGame();
  }else{
    overlay.classList.add('lose');
    overlay.style.display ='flex';
    overlay.children[0].textContent = 'Failure';
    overlay.children[1].textContent ='restart';
    this.resetGame();
  }

}
}
