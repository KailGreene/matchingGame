const time = document.querySelector(".time_num");
const moves = document.querySelector(".moves_num");
const reset = document.querySelector(".reset_btn");
const card = document.querySelectorAll(".card");
const cards = [...card];
//game board
class gameMat {
  constructor(board, win, turn, time, score) {
    this.board = board;
    this.win = win;
    this.turn = turn;
    this.time = time;
    this.score = score;
  }

  //get turn
  getTurn = () => {
    return this.turn;
  };
}
//populate game board
populate = () => {};

//reset game state
countUp = gameMat => {
  gameMat.turn = gameMat.turn + 1;
};
//start timer
trackTime = () => {};
//increase score
increaseScore = () => {};
//moves turns if pick was wrong lay down cards if not stay revealed
moveTurn = () => {};
//lockboard
lockboard = () => {};
//lock cards after pick

//add chosen class to cards

let chosen = function() {
  this.classList.toggle("chosen");
};

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", chosen);
}
// initialize board
let gameMat1 = new gameMat(Array(12).fill(null), false, 1, 0, 0);

countUp(gameMat1);
gameMat1.turn = gameMat1.turn + 1;
console.log(gameMat1.getTurn());

//start game if board win state is false
let startGame = board => {
  if (win != true) {
    while (win != true) {
      this.gameMat.populate();
    }
  }
};
