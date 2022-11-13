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


checkLetter(button) {
  let match = null;
  let selectLi = document.querySelectorAll('li');
  for (let i = 0; i < selectLi.length; i++) {
    if (button.toLowerCase() === selectLi[i].textContent.toLowerCase()) {
      selectLi[i].classList.add('show');
      selectLi[i].style.transition = 'all 1.5s ease-out ';
      match = button;
    }
  }
  return match;
}
showMatchedLetter(letter) {
  let selectLi = document.querySelectorAll('li');
  for (let i = 0; i < selectLi.length; i++) {
    const char = selectLi[i];
    if (char.innerHTML === letter) {
      char.classList.replace('hide', 'show');
    }
  }
}
}


