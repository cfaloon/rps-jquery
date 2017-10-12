var playerScore = 0;
var computerScore = 0;
var roundNumber = 1;

function randomThrow() {
  var choices = ['rock', 'paper', 'scissors'];
  var randomIndex = Math.floor(3 * Math.random());
  return choices[randomIndex];
}

function playRound(playerThrow) {
  var computerThrow = randomThrow();
  if (playerThrow == computerThrow) {
    // TIE!!!
    $("#log").append(`<tr><td>${roundNumber}. Player Throw: ${playerThrow} Computer Throw: ${computerThrow} Result: TIE.</td></tr>`);
  } else if (
     (playerThrow == 'rock' && computerThrow == 'scissors')
  || (playerThrow == 'scissors' && computerThrow == 'paper')
  || (playerThrow == 'paper' && computerThrow == 'rock')) {
    // player win!!!
    $("#log").append(`<tr><td>${roundNumber}. Player Throw: ${playerThrow} Computer Throw: ${computerThrow} Result: PLAYER WIN.</td></tr>`);
    playerScore++;
    $('#player-score').html(playerScore);
  } else {
    // computer win :(
    $("#log").append(`<tr><td>${roundNumber}. Player Throw: ${playerThrow} Computer Throw: ${computerThrow} Result: COMPUTER WIN.</td></tr>`);
    computerScore++;
    $('#computer-score').html(computerScore);
  }
  roundNumber++;
  if (playerScore >= 5 || computerScore >= 5) {
    // game over scenario
    $('#button-group').hide();
    $('#reset-panel').show();
  }
}

$('#rock').click(function() {
  console.log("rock clicked");
  playRound('rock');
});

$('#paper').click(function() {
  console.log("paper clicked");
  playRound('paper');
});

$('#scissors').click(function() {
  console.log("scissors clicked");
  playRound('scissors');
});

$('#reset-button').click(function() {
  playerScore = 0;
  computerScore = 0;
  roundNumber = 1;

  $('#player-score').html(playerScore);
  $('#computer-score').html(computerScore);

  $('#log').html('<tr><th>GameLog</th></tr>');

  $('#button-group').show();
  $('#reset-panel').hide();


});
