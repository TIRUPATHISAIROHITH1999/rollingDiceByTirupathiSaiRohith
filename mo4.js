"use strict";
//displays//
const scoreP1 = document.querySelector("#score--0");
const scoreP2 = document.querySelector("#score--1");
const dicePic = document.querySelector(".dice");
const currentScoreP1 = document.getElementById("current--0");
const currentScoreP2 = document.getElementById("current--1");
const disPlayer1 = document.querySelector(".player--0");
const disPlayer2 = document.querySelector(".player--1");
//BUttons//
const buttonRoll = document.querySelector(".btn--roll");
const buttonHold = document.querySelector(".btn--hold");
const buttonNew = document.querySelector(".btn--new");

/*//Variables//
const ScoresPlayer=[0,0];
let cscore=0;
let aplayer=0;
let playingGame=true;

//Lets test The starting condition//
scoreP1.textContent=0;
scoreP2.textContent=0;
dicePic.classList.add("hidden");
currentScoreP1.textContent=0;
currentScoreP2.textContent=0;
*/
let ScoresPlayer, cscore, aplayer, playingGame;
//const Functions//

const switchfunc = function () {
  document.getElementById(`current--${aplayer}`).textContent = 0;
  cscore = 0;
  aplayer = aplayer === 0 ? 1 : 0;
  //colour port//
  disPlayer1.classList.toggle("player--active");
  disPlayer2.classList.toggle("player--active");
};

const intializisation = function () {
  ScoresPlayer = [0, 0];
  cscore = 0;
  aplayer = 0;
  playingGame = true;

  scoreP1.textContent = 0;
  scoreP2.textContent = 0;
  currentScoreP1.textContent = 0;
  currentScoreP2.textContent = 0;

  dicePic.classList.add("hidden");
  document
    .querySelector(`.player--${aplayer}`)
    .classList.remove("player--winner");
  document
    .querySelector(`.player--${aplayer}`)
    .classList.remove("player--active");
  document.querySelector(`.player--0`).classList.add("player--active");
};
//inti function//
intializisation();

//operations//
buttonRoll.addEventListener("click", function () {
  if (playingGame) {
    const random = Math.trunc(Math.random() * 6 + 1);
    console.log(random);
    dicePic.classList.remove("hidden");
    dicePic.src = `dice-${random}.png`;

    //switch players//
    if (random !== 1) {
      cscore = cscore + random;
      document.getElementById(`current--${aplayer}`).textContent = cscore;
    } else {
      switchfunc();
    }
  }
});

//BUtton hold part//

buttonHold.addEventListener("click", function () {
  if (playingGame) {
    ScoresPlayer[aplayer] = ScoresPlayer[aplayer] + cscore;
    console.log(ScoresPlayer[aplayer]);
    console.log(aplayer);
    document.querySelector(`#score--${aplayer}`).textContent =
      ScoresPlayer[aplayer];

    //final strike for 100//
    if (ScoresPlayer[aplayer] >= 100) {
      playingGame = false;
      document
        .querySelector(`.player--${aplayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${aplayer}`)
        .classList.remove("player--active");
      dicePic.classList.add("hidden");
    } else {
      switchfunc();
    }
  }
});

//new game//

buttonNew.addEventListener("click", intializisation);
