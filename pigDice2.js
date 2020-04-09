// When the user starts a new game, they see both players' have a score of zero
// Clicking the 'Hold' button changes which player's turn it is
// Clicking the 'Roll Dice' button displays a random number from 1 - 6
// " the roll's result is added to that turn's total
// If the roll's result is 1, the turn's total is reset and the current player is changed
function Game() {
  this.playerOneTurn = true;
  this.runningTotal = 0;
}

Game.prototype.rollDice = function (player) {
  var result = (Math.ceil((Math.random() * 6)));
  console.log("die: ", result);
  if (result === 1) {
    this.endTurn(player);
    this.runningTotal = 0;
  } else {
    this.runningTotal += result;
    console.log("Running total ", this.runningTotal)
  }
  return result;
}

Game.prototype.checkForWin = function (firstPlayer, secondPlayer) {
  if (firstPlayer.totalScore >= 25) {
    return firstPlayer;
  }
  if (secondPlayer.totalScore >= 25) {
    return secondPlayer;
  }
}

Game.prototype.endTurn = function (player) {
  player.totalScore += this.runningTotal;
  console.log("Player One: ", this.playerOneTurn, "Score: ", player.totalScore);
  this.playerOneTurn = !this.playerOneTurn;
}

function Player() {
  this.totalScore = 0;
  this.name = ""
}

$(document).ready(function () {
  var game = new Game();
  var player1 = new Player();
  var player2 = new Player();
  $("#player1Score").text(player1.totalScore);
  $("#player2Score").text(player2.totalScore);
  $("#roll").click(function () {

    if (game.playerOneTurn) {
      console.log("result show up!");
      $("#result").text(game.rollDice(player1));
    } else {
      console.log("result show up!");
      $("#result").text(game.rollDice(player1));
    }
    $("#player1Score").text(player1.totalScore);
    $("#player2Score").text(player2.totalScore);
    $("#running").text(game.runningTotal)
    game.checkForWin(player1, player2) ? alert("Winner!") : null;

  });
  $("#hold").click(function () {
    $("#running").text(game.runningTotal)
    game.playerOneTurn ? game.endTurn(player1) : game.endTurn(player2);
  })
  game.checkForWin(player1, player2) ? alert("Winner!") : null;

})