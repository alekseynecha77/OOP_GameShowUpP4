/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const createLi = document.querySelector("#phrase ul");
const hidesGame = document.getElementById("overlay");
const qwerty = document.getElementById("qwerty");

const btnClick = document.getElementById("btn__reset");

btnClick.addEventListener("click", () => {
  const game = new Game();

  game.startGame();
});





