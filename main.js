const time = document.querySelector(".time_num");
const moves = document.querySelector(".moves_num");
const reset = document.querySelector(".reset_btn");
const card = document.querySelectorAll(".card");
const cards = Array.from(card);
//game board
class board {
  constructor(board = [], win = false, turn = 1, time = 0, score = 0) {
    board = this.board;
    win = this.win;
    turn = this.turn;
    time = this.time;
    score = this.score;
  }
}
//poplate game board
let populate = () => {};
//add chosen class to cards

let chosen = () => {
  this.classList.toggle("chosen");
};
cards.forEach(cards => cards.addEventListener("click", chosen));
//reset game state
let countUp = num => num + 1;
//start timer
let trackTime = () => {};
//increase score
let increaseScore = () => {};
//moves turns if pick was wrong lay down cards if not stay revealed
let moveTurn = () => {};

//start game if board win state is false
let startGame = board => {
  if (win != true) {
    while (win != true) {
      populate();
    }
  }
};
