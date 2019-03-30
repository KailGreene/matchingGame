window.onload = function() {
  const time = document.querySelector(".time_num");
  const moves = document.querySelector(".moves_num");
  const reset = document.querySelector(".reset_btn");
  const card = document.querySelectorAll(".card");
  //need to grab card front or cant compare images
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
      name: "goku"
    },
    {
      img: "vegetaProfile.jpg",
      name: "vegeta"
    },
    {
      img: "krillinProfile.jpg",
      name: "krillin"
    },
    {
      img: "piccolo.jpg",
      name: "piccolo"
    },
    {
      img: "bulmaProfile.jpg",
      name: "bulma"
    },
    {
      img: "gohanProfile.jpg",
      name: "gohan"
    }
  ];
  //populate game board
  populate = gameMat => {
    gameMat.board.forEach(element => {
      if (element === null) {
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

  //add chosen class to cards

  let flipCard = function() {
    this.classList.add("chosen");
    console.log(this.dataset.character);
    console.log(getComputedStyle(this));
    console.log(this.childNodes[1].childNodes[1].style.color);
    this.children[0].children[0].style.backgroundImage = "";
    if (!isFlipped) {
      isFlipped = true;
      firstPick = this;
      console.log(firstPick);
      console.log(firstPick.src);
      console.log(firstPick.style.backgroundColor);
    } else {
      secondPick = this;
      isFlipped = false;
      console.log(secondPick);
      console.log(secondPick.style.backgroundImage);
    }

    checkMatch(firstPick, secondPick);
  };
  let checkMatch = (firstPick, secondPick) => {
    if (firstPick.style.backgroundImage === secondPick.style.backgroundImage) {
      firstPick.removeEventListner("click", flipCard);
      secondPick.removeEventListner("click", flipCard);
      return true;
    } else {
      return false;
    }
  };

  //add Event Listener to cards
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
};
