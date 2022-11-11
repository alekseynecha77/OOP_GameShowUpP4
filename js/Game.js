/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const hearts = document.querySelectorAll(".tries img");
const keys = document.getElementsByClassName('key');
const startScreenOverlay = document.getElementById('overlay');

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
  
  }
  
  handleInteraction(btn) {
    btn.disabled = true;
      if (btn.tagName === "BUTTON") {
    btn.disabled = false;
    btn.className = "chosen";

    let letterFound = this.activePhrase.checkLetter(btn);

    if (letterFound === null) {
      const lost = document.querySelectorAll(".tries img")[this.missed];
      lost.src = "images/lostHeart.png";
      this.missed++;
    }
    
  }
}
checkForWin(){

  const show = document.getElementsByClassName('show');
  const letter = document.getElementsByClassName('letter');
  if(letter.length === show.length){
    overlay.classList.add('win');
    overlay.style.display ='flex';
    overlay.children[0].textContent = 'You won';
    overlay.children[1].textContent ='restart';
    resetGame();
  }else if(this.missed >= 5){
    overlay.classList.add('lose');
    overlay.style.display ='flex';
    overlay.children[0].textContent = 'Failure';
    overlay.children[1].textContent ='restart';
    resetGame();
  }

}
}
