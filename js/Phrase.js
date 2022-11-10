/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */



class Phrase {

    constructor(phrase) {
  this.phrase = phrase;
    }
    /**
* Display phrase on game board
*/
addPhraseToDisplay() {

  for (let i = 0; i < this.phrase.length; i++) {
        if ((this.phrase[i] >= "A" && this.phrase[i] <= "Z") || (this.phrase[i] >= "a" && this.phrase[i] <= "z")) 
        {
          createLi.innerHTML += `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;

        } else {
          createLi.innerHTML += `<li class="space"></li>`;
          
        }
  }
}
/**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/
// checkLetter(letter) {};

/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
// showMatchedLetter(letter) {};
}

//(this.phrase[i] >= "A" && this.phrase[i] <= "Z") || (this.phrase[i] >= "a" && this.phrase[i] <= "z")

