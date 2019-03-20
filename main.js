const time = document.querySelector(".time_num");
const moves = document.querySelector(".moves_num");
const reset = document.querySelector(".reset_btn");
const card = document.querySelectorAll(".card");
const cards = [...card];

let isFlipped = false;
let firstPick, secondPick;
//game board
class gameMat {
  constructor(board, win, turn, time, score) {
    this.board = Array(12).fill(null);
    this.win = false;
    this.turn = 0;
    this.time = 0;
    this.score = 0;
  }

  //get turn
  getTurn = () => {
    return this.turn;
  };
}

let DBZcardFont = [
  {
    img: "gokuProfile.jpg",
    num: 1
  },
  {
    img: "vegetaProfile.jpg",
    num: 2
  },
  {
    img: "krillinProfile.jpg",
    num: 3
  },
  {
    img: "piccolo.jpg",
    num: 4
  },
  {
    img: "bulmaProfile.jpg",
    num: 5
  },
  {
    img: "gohanProfile.jpg",
    num: 6
  }
];
//populate game board
populate = gameMat => {
  gameMat.board.forEach(element => {
    if (element == null) {
    }
  });
};

//increase turn
countUp = gameMat => {
  gameMat.turn = gameMat.turn + 1;
};
//timer
trackTime = () => {};
//increase score
increaseScore = () => {};
//lockboard
lockboard = () => {};
//lock cards after pick

//add chosen class to cards

let flipCard = function() {
  this.classList.toggle("chosen");

  if (!isFlipped) {
    isFlipped = true;
    firstPick = this;
  } else {
    secondPick = this;
    isFlipped = false;
  }
};

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", flipCard);
}
// initialize board
let gameMat1 = new gameMat();

countUp(gameMat1);
gameMat1.turn = gameMat1.turn + 1;
time.textContent = gameMat1.time;
console.log(gameMat1.board);
//start game if board win state is false
let startGame = gameMat => {
  if (win != true) {
    populate(gameMat);
    while (gameMat.win != true) {
      time.textContent = gameMat.time;
    }
  }
};
