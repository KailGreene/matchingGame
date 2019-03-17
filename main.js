const time = document.querySelector(".time_num");
const moves = document.querySelector(".moves_num");
const reset = document.querySelector(".reset_btn");
const card = document.querySelectorAll(".card");
const cards = [...card];
//game board
class gameMat {
  constructor(board, win, turn, time, score) {
    board = this.board;
    win = this.win;
    turn = this.turn;
    time = this.time;
    score = this.score;
  }
  //populate game board
  populate = () => {
    this.board = Array(12).fill(null);
  };

  //reset game state
  countUp = turn => this.turn + 1;
  //start timer
  trackTime = () => {};
  //increase score
  increaseScore = () => {};
  //moves turns if pick was wrong lay down cards if not stay revealed
  moveTurn = () => {};
  //lockboard
  lockboard = () => {};
  //lock cards after pick
}
//add chosen class to cards

let chosen = function() {
  this.classList.toggle("chosen");
};

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", chosen);
}
// initialize board
let gameMat1 = new gameMat([], false, 1, 0, 0);

console.log(gameMat1);
//start game if board win state is false
let startGame = board => {
  if (win != true) {
    while (win != true) {
      this.board.populate();
    }
  }
};
