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
  checkForWin();
});

function resetGame() {
  const buttons = document.getElementsByTagName("button");
  const li = document.querySelectorAll("ul");
  overlay.className = "start";
  li.innerHTML = " ";
  missed = 0;

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

function checkForWin(){

  const show = document.getElementsByClassName('show');
  const letter = document.getElementsByClassName('letter');
  if(letter.length === show.length){
    overlay.classList.add('win');
    overlay.style.display ='flex';
    overlay.children[0].textContent = 'You won';
    overlay.children[1].textContent ='restart';
    resetGame();
  }else if(missed >= 5){
    overlay.classList.add('lose');
    overlay.style.display ='flex';
    overlay.children[0].textContent = 'Failure';
    overlay.children[1].textContent ='restart';
    resetGame();
  }

}
