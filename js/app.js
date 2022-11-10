/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const createLi = document.querySelector("#phrase ul");
const hidesGame = document.getElementById("overlay");
const qwerty = document.getElementById("qwerty");

const game = new Game();

const btnClick = document.getElementById("btn__reset");

btnClick.addEventListener("click", () => {
  game.startGame();
});
let missed = 0;

qwerty.addEventListener("click", (e) => {
  let btn = e.target;
  if (btn.tagName === "BUTTON") {
    btn.disabled = true;
    btn.className = "chosen";
    let letterFound = checkLetter(btn);

    if (letterFound === null) {
      const lost = document.querySelectorAll(".tries img")[missed];
      lost.src = "images/lostHeart.png";
      missed++;
    }
  }
});

function checkLetter(button) {
  let match = null;
  let selectLi = document.querySelectorAll("li");
  for (let i = 0; i < selectLi.length; i++) {
    if (button.textContent === selectLi[i].textContent.toLowerCase()) {
      selectLi[i].classList.add("show");
      selectLi[i].style.transition = "all 1.5s ease-out ";
      match = button.textContent;
    }
  }
  return match;
}
