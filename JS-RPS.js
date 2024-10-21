const score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    ties: 0,
  };
  updateScoreElement();
  /*if (!score) {
               score ={ wins : 0 ,
                losses : 0,
                ties : 0}
            
            };*/

  function updateScoreElement() {
    document.querySelector(
      ".js-score"
    ).innerHTML = `wins : ${score.wins} losses : ${score.losses}  ties : ${score.ties}`;
  }
  function PlayGame(playermove) {
    const computerMove = pickComputerMove();
    let result = "";
    if (playermove === "rock") {
      if (computerMove === "rock") {
        result = "equal";
      }
      if (computerMove === "paper") {
        result = "you lose ";
      } else if (computerMove === "scissors") {
        result = "you win";
      }
    } else if (playermove === "paper") {
      if (computerMove === "rock") {
        result = "you win";
      } else if (computerMove === "paper") {
        result = "equal";
      } else if (computerMove === "scissors") {
        result = "you lose";
      }
    } else if (playermove === "scissors") {
      if (computerMove === "rock") {
        result = "you lose";
      } else if (computerMove === "paper") {
        result = "you win";
      } else if (computerMove === "scissors") {
        result = "equal";
      }
    }
    if (result === "you win") {
      score.wins += 1;
    } else if (result === "you lose") {
      score.losses += 1;
    } else if (result === "equal") {
      score.ties += 1;
    }
    document.querySelector(
      ".js-moves"
    ).innerHTML = `you 
    <img src="img/${playermove}.png" class="icon">
    vs
    <img src="img/${computerMove}.png" class="icon">
    computer`;
    document.querySelector(".js-result").innerHTML = result;

    updateScoreElement();
    localStorage.setItem("score", JSON.stringify(score));
    /*local storage only support string */
  }

  function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = "";

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = "rock";
    } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
      computerMove = "paper";
    } else if (randomNumber > 2 / 3 && randomNumber < 1) {
      computerMove = "scissors";
    }
    return computerMove;
  }