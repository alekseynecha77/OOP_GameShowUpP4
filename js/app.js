/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);
const createLi = document.querySelector('#phrase ul');
const hidesGame = document.getElementById('overlay');

// const phrase = new Phrase();

const game = new Game();
game.getRandomPhrase().addPhraseToDisplay();
const randomPhrase = game.getRandomPhrase();
// phrase.addPhraseToDisplay();

game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);