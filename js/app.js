/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);
const createLi = document.querySelector('#phrase ul');

const phrase = new Phrase();

const game = new Game();
game.getRandomPhrase().addPhraseToDisplay();
const randomPhrase = game.getRandomPhrase();
phrase.addPhraseToDisplay();

//   game.phrases.forEach((phrase, index) => {
//     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
//     });const logPhrase = (phrase) => {

//     const logPhrase = (phrase) => {
//         console.log(`Phrase - phrase: `, phrase.phrase);
//         };
// const game = new Game();
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());