

function getComputerChoice() { // Randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
    let choiceNum = Math.floor(Math.random() * 3); // Get random integer between 0 and 2.
    if (choiceNum === 0) {
        return 'Rock';
    } else if (choiceNum === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

let tieMsg = 'It\'s a tie!';
let winMsg = 'You won!';
let loseMsg = 'You lost!';
let i = 0;

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.trim();

    if ( playerSelection === 'Rock' ) {
        if ( computerSelection === 'Rock' ) {
            return tieMsg;
        } else if ( computerSelection === 'Paper' ) {
            return loseMsg;
        } else {
            return winMsg;
        }

    } else if ( playerSelection === 'Paper' ) {
        if ( computerSelection === 'Rock' ) {
            return winMsg;
        } else if ( computerSelection === 'Paper' ) {
            return tieMsg;
        } else {
            return loseMsg;
        }

    } else if ( playerSelection === 'Scissors' ) {
        if ( computerSelection === 'Rock' ) {
            return loseMsg;
        } else if ( computerSelection === 'Paper' ) {
            return winMsg;
        } else {
            return tieMsg;
        }

    } else {
        return 'Error! Player selection not valid.'
    }

    i++;

}

let computerSelection;
let playerSelection = 'default';

function game() {
    computerSelection = getComputerChoice();
    alert('You are about to face off against HAL 9000 in a 5 round game.');
    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        playerSelection = prompt('~Round ' + (i+1) + '~\nType your weapon below: \'rock\' or \'paper\' or \'scissors\'.', '');
        alert(playRound(playerSelection,computerSelection));
    }
}

/*
listen to buttons player
if rock clicked
play rock vs computer
return result
if result = win, send win msg back
else if result = tie, send tie msg back
else if result = lose, send lose msg back
*/

function playRock() {
    alert(playRound('Rock', computerSelection));
}

function playPaper() {
    alert(playRound('Paper', computerSelection));
}

function playScissors() {
    playRound('Scissors', computerSelection)
}

function emojify(str) {
    if (str === 'Rock') {
        return '✊';
    } else if (str === 'Paper') {
        return '✋';
    } else if (str === 'Scissors') {
        return '✌';
    } else {
        return str;
    }
}

function updateScroll(){
    var element = document.getElementById("chat");
    element.scrollTop = element.scrollHeight;
}

const rock = document.getElementById("rock-btn");

// send div of rock msg by player
rock.addEventListener("click", function() {
    if (i < 3) {
        computerSelection = getComputerChoice();
        $("#button-chooser").remove();
        document.getElementById('chat-body').innerHTML += '<div class="msg animate" id="mychoice"> <span class="player"> <div class="msg-content"> <span style="font-size: 2em">✊</span> </div> </span> </div> ' + '<div class="msg animate" id="msg4"> <span class="hal"> <img class="avatar" src="hal_9000.png"> <div class="msg-content" style="font-size: 2em; padding: 12px 18px;">' + emojify(computerSelection) + '</div> </span> </div>' +
        '<div class="msg animate" id="msg-result"><span class="hal"><img class="avatar" src="hal_9000.png"><span class="msg-content">Round n:<br>Hal\'s ' + computerSelection.toUpperCase() + ' vs your ROCK:<br><br><strong>' + playRound('Rock', computerSelection) + '<br><br>Hal 0 : 2 You.</strong><br><br>n rounds to go!</span></span></div>' + '<div class="buttons player" id="button-chooser"> <button class="btn btn-square" id="rock-btn"> <div class="sign">✊</div> </button> <button class="btn btn-square" id="paper-btn"> <div class="sign">✋</div> </button> <button class="btn btn-square" id="scissors-btn"> <div class="sign">✌</div> </button> </div>'; // Show result message.
    }
    setInterval(updateScroll,500);
});


const paper = document.getElementById("paper-btn");
// send div of paper msg by player
paper.addEventListener("click", function() {
    playRound('Paper', computerSelection);
});

const scissors = document.getElementById("scissors-btn");
// send div of scissors msg by player
scissors.addEventListener("click", function() {
    playRound('Scissors', computerSelection);
});