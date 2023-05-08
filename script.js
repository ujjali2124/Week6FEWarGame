class Deck {
  constructor() {
    this.totalCards = [];
    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
    for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < suits.length; j++) {
        this.totalCards.push(numbers[i] + " " + suits[j]);
      }
    }
  }

  shuffle() {
    this.totalCards.sort(() => Math.random() - 0.5);
  }

  cardDistribute() {
    const p1 = [];
    const p2 = [];
    for (let i = 0; i < this.totalCards.length; i += 2) {
      p1.push(this.totalCards[i]);
      p2.push(this.totalCards[i + 1]);
    }
    return [p1, p2];
  }
}

class Player {
  constructor() {
    const myDeck = new Deck();
    myDeck.shuffle();
    const [p1, p2] = myDeck.cardDistribute();
    this.playerCards = [p1, p2];
  }

  myCards(value) {
    const playerValue = value;
    switch (playerValue) {
      case 1:
        console.log(this.playerCards[0]);
        break;
      case 2:
        console.log(this.playerCards[1]);
        break;
      default:
        console.log("Invalid player number. Please enter 1 or 2.");
        break;
    }
  }
}

class Game {
  constructor() {}

  showCard() {
    let player1Score = 0;
    let player2Score = 0;
    const player1Name = "Player 1";
    const player2Name = "Player 2";
    const myPlayer = new Player();
    const userInput = prompt("Which player do you want to be, 1 or 2?");
    myPlayer.myCards(parseInt(userInput));

    let i = 0;
    let num = 25;
    while (i < 26) {
      const playerValue = parseInt(userInput);
      if (playerValue === 1) {
        const playerInput = prompt(`Enter a number between 0 and ${num}.`);
        console.log(myPlayer.playerCards[0][playerInput]);
        if(playerInput > num){
          console.log("Wrong Input Sorry now you can not play anymore Byeeeeeee");
        }
        const player2RandomNum = Math.floor(Math.random() * num);
        console.log(myPlayer.playerCards[1][player2RandomNum]);

        const player1CardData = myPlayer.playerCards[0][playerInput];
        const player1CardInfo = player1CardData.split(" ");
        const player1CardValue = parseInt(player1CardInfo[0]);

        const player2CardData = myPlayer.playerCards[1][player2RandomNum];
        const player2CardInfo = player2CardData.split(" ");
        const player2CardValue = parseInt(player2CardInfo[0]);

        if (player1CardValue > player2CardValue) {
          player1Score += 1;
          console.log(player1Name + " is the winner & Score:" + player1Score);
          console.log();
        } else if (player1CardValue < player2CardValue) {
          player2Score += 1;
          console.log(player2Name + " is the winner & Score:" + player2Score);
          console.log();
        } else {
          console.log("It's a draw");
        }

        myPlayer.playerCards[0].splice(playerInput, 1);
        myPlayer.playerCards[1].splice(player2RandomNum, 1);

        num = num - 1;
      }

    else{
     
      const player1RandomNum = Math.floor(Math.random() * num);
      console.log(myPlayer.playerCards[1][player1RandomNum]);

      const playerInput = prompt(`Enter a number between 0 and ${num}.`);
      if(playerInput > num){
        console.log("Wrong Input Sorry now you can not play anymore Byeeeeeee");
      }
      console.log(myPlayer.playerCards[0][playerInput]);

      const player1CardData = myPlayer.playerCards[0][player1RandomNum];
      const player1CardInfo = player1CardData.split(" ");
      const player1CardValue = parseInt(player1CardInfo[0]);

      const player2CardData = myPlayer.playerCards[1][playerInput];
      const player2CardInfo = player2CardData.split(" ");
      const player2CardValue = parseInt(player2CardInfo[0]);

      if (player1CardValue > player2CardValue) {
        player1Score += 1;
        console.log(player1Name + " is the winner & Score:" + player1Score);
        console.log();
      } else if (player1CardValue < player2CardValue) {
        player2Score += 1;
        console.log(player2Name + " is the winner & Score:" + player2Score);
        console.log();
      } else {
        console.log("It's a draw");
      }
      myPlayer.playerCards[0].splice(player1RandomNum, 1);
      myPlayer.playerCards[1].splice(playerInput, 1);

      num = num - 1;
      }
      i++;
      }
      console.log(player1Name + "Final Score is --" + player1Score);
      console.log(player2Name + "Final Score is --" + player2Score);
      console.log();
      console.log("*******************************************************");
      
      if (player1Score > player2Score) {
        console.log(player1Name + " is winner");
      } else if (player1Score < player2Score) {
        console.log(player2Name + " is winner");
      } else {
        console.log("It's draw");
      }
      console.log("*******************************************************");
        }
      }
      
      const myGame = new Game();
      myGame.showCard();




