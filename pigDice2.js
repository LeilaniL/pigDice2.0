// When the user starts a new game, they see both players' have a score of zero
// Clicking the 'Hold' button changes which player's turn it is
// Clicking the 'Roll Dice' button displays a random number from 1 - 6
// " the roll's result is added to that turn's total
// If the roll's result is 1, the turn's total is reset and the
function Game() {
  this.playerOneTurn = true;
}

Game.prototype.rollDice = function () {
  console.log(Math.ceil((Math.random() * 6)));
}
// Game.prototype.checkForWin = function () {

// }
Game.prototype.endTurn = function () {
  this.playerOneTurn = !this.playerOneTurn;
}

function Player() {
  this.totalScore = 0;
  this.name = ""
}

// Player.prototype.addToScore() {

// }




$(document).ready(function () {
  $("h1").html("Hello!");
  var game = new Game();
  var player1 = new Player();
  var player2 = new Player();
  $("#player1Score").text(player1.totalScore);
  $("#player2Score").text(player2.totalScore);
  $("#roll").click(function () {
    game.rollDice();
  });
  $("#hold").click(function () {
    game.hold();
  })

})