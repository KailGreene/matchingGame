const time = document.querySelector(".time_num");
const moves = document.querySelector(".moves_num");
const reset = document.querySelector(".reset_btn");
const card = document.querySelectorAll(".card");
//const dificultySelect = document.querySelector(".difficulty");
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

  turnUp = () => {
    this.turn = this.turn + 1;
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
turnUp = gameMat => {
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
let checkMatch = (firstPick, secondPick) => {
  if (firstPick.src === secondPick.src) {
    //lock  the cards by removing event listner and add point to the score
    firstPick.removeEventListner("click", flipCard);
  } else {
    ///flip cards back over by removing chosen
  }
};
let flipCard = function() {
  this.classList.toggle("chosen");

  if (!isFlipped) {
    isFlipped = true;
    firstPick = this;
    console.log(firstPick);
    console.log(firstPick.src);
  } else {
    secondPick = this;
    isFlipped = false;
    console.log(secondPick);
    console.log(secondPick.src);
  }

  //checkMatch(firstPick, secondPick);
};

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", flipCard);
}

//difficulties
let selectDifficulty = () => {
  if (dificultySelect === 1) {
    let gameMat1 = new gameMat();
  } else if (difficultySelect === 2) {
    let gameMat1 = new gameMat();
    let gameMat2 = new gameMat();
  } else {
    let gameMat1 = new gameMat();
    let gameMat2 = new gameMat();
    let gameMat3 = new gameMat();
  }
};
//test board
let testBoard = new gameMat();
time.textContent = testBoard.time;
testBoard.turnUp();
console.log(testBoard.turn);
//start game if board win state is false
let startGame = gameMat => {
  if (win != true) {
    populate(gameMat);
    while (gameMat.win != true) {
      time.textContent = gameMat.time;
    }
  }
};
