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
let winMsg = 'You win!';
let loseMsg = 'You lose!';

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

function currentMatchStatusComputerDialogue() {
    
    if (i <= 4) {    
        if (playerWins > computerWins) {
            const playerIsWinning = [
                'You\'re winning?! 😨',
                'You\'re winning, but you\'ll see... 😈',
                'I just wanted some friends.',
                'You know... I\'m really just lonely...',
                'The tragedy of life is not found in failure but complacency. Beep boop.',
                'Beep boop beep!!!',
                ]
            const random = Math.floor(Math.random() * playerIsWinning.length);
            return playerIsWinning[random];


        } else if (computerWins > playerWins) {
            const computerTaunt = [
                'You\'re losing! Hehe.',
                'Did I mention you\'re losing?',
                'Catch up to me or I win! Hehehe!!!',
                'I can feel it... I\'m going to win...',
                'Boop boop beep beep!!!!!1!111!one!11!',
                ]
            const random = Math.floor(Math.random() * computerTaunt.length);
            return computerTaunt[random];

        } else {
            const weAreTied = [
                'Tied... For now...',
                'We\'re tied. See, you and I, we\'re not so different.',
                'Score same same!',
                'We\'re tied.</span></span></div><div class="msg animate" id="msg-result"><span class="hal"><img class="avatar" src="hal_9000.png"><span class="msg-content">I... I like that.',
                ]
            const random = Math.floor(Math.random() * weAreTied.length);
            return weAreTied[random];

        }
    } else {
        return '';
    }
}

function changeWeaponMsgColor(str) { // Changes color of weapon message.
    let playerWeaponThisRound = '#player-weapon-of-round-' + i;
    let computerWeaponThisRound = '#computer-weapon-of-round-' + i;

    if (str === 'flash') {

        if (playerSelection === 'Rock') { // Flashes colors of player's weapon message.
            $(playerWeaponThisRound).css('animation', 'flash-rock 0.8s linear infinite');
        } else if (playerSelection === 'Paper') {
            $(playerWeaponThisRound).css('animation', 'flash-paper 0.8s linear infinite');
        } else if (playerSelection === 'Scissors') {
            $(playerWeaponThisRound).css('animation', 'flash-scissors 0.8s linear infinite');
        }

        if (computerSelection === 'Rock') { // Flashes colors of computer's weapon message.
            $(computerWeaponThisRound).css('animation', 'flash-rock 0.8s linear infinite');
        } else if (computerSelection === 'Paper') {
            $(computerWeaponThisRound).css('animation', 'flash-paper 0.8s linear infinite');
        } else if (computerSelection === 'Scissors') {
            $(computerWeaponThisRound).css('animation', 'flash-scissors 0.8s linear infinite');
        }

    } else if (str === 'still') {

        if (playerSelection === 'Rock') {
            $(playerWeaponThisRound).css('animation', 'none');
            $(playerWeaponThisRound).css('background-color', 'rgb(136 31 31)');
        } else if (playerSelection === 'Paper') {
            $(playerWeaponThisRound).css('animation', 'none');
            $(playerWeaponThisRound).css('background-color', 'rgb(49 130 27)');
        } else if (playerSelection === 'Scissors') {
            $(playerWeaponThisRound).css('animation', 'none');
            $(playerWeaponThisRound).css('background-color', 'rgb(52 70 213)');
        }

        if (computerSelection === 'Rock') {
            $(computerWeaponThisRound).css('animation', 'none');
            $(computerWeaponThisRound).css('background-color', 'rgb(136 31 31)');
        } else if (computerSelection === 'Paper') {
            $(computerWeaponThisRound).css('animation', 'none');
            $(computerWeaponThisRound).css('background-color', 'rgb(49 130 27)');
        } else if (computerSelection === 'Scissors') {
            $(computerWeaponThisRound).css('animation', 'none');
            $(computerWeaponThisRound).css('background-color', 'rgb(52 70 213)');
        }
    }
}

function changeWeaponMsgSize(str) {
    let playerWeaponThisRound = '#player-weapon-of-round-' + i;
    let computerWeaponThisRound = '#computer-weapon-of-round-' + i;
    if (str === 'You win!') { // If player wins the round:
        $(playerWeaponThisRound).css('font-size', '2.6em');
        $(playerWeaponThisRound).css('border-radius', '40px 40px 0 40px');
        $(computerWeaponThisRound).css('font-size', '1.2em');
        $(computerWeaponThisRound).css('border-radius', '25px 25px 25px 0');
    } else if (str == 'You lose!') { // If player loses the round:
        $(computerWeaponThisRound).css('font-size', '2.6em');
        $(computerWeaponThisRound).css('border-radius', '40px 40px 40px 0');
        $(playerWeaponThisRound).css('font-size', '1.2em');
        $(playerWeaponThisRound).css('border-radius', '25px 25px 0 25px');
    }
}

function randomEmoji() {
    const emojis  = ['😬','😮‍💨','😵‍💫','😖','😠','🤧']
    const random = Math.floor(Math.random() * emojis.length);
    return emojis[random];
}


let computerSelection;
let playerSelection = 'default';

function game() {
    let buttonChooser = document.getElementById("button-chooser");
    buttonChooser.style.display = "none"; // Hide weapon choice buttons.

    if (playerWins < 3 && computerWins < 3 && i <= 5) { // Game is run for 5 rounds.
        computerSelection = getComputerChoice(); // Put computer choice into variable.
        // $("#button-chooser").remove();
        let resultOfGame = playRound(playerSelection, computerSelection); // Put game result into variable.
        scoreCounter(resultOfGame); // Logs the game result into playerWins and computerWins.
        $(
            '<div class="msg animate" id="msg-result"><span class="hal"><img class="avatar" src="hal_9000.png"><span class="msg-content" style="background-color: black; color: #ddd;">🔹 <strong>ROUND ' + i + '</strong> of 5: 🔹</span></span></div><div class="weapon-msg"><div class="msg animate" id="mychoice"><span class="player"><div class="emoji">' + randomEmoji() + '</div> <div class="msg-content player-weapon" id="player-weapon-of-round-' + i + '"><span>' + emojify(playerSelection)+ '</span> </div> </span> </div> ' + '<div class="msg animate" id="msg4"> <span class="hal"> <img class="avatar" src="hal_9000.png"> <div class="msg-content computer-weapon" style="padding: 12px 18px;" id="computer-weapon-of-round-' + i + '">' + emojify(computerSelection) + '</div></span></div></div>' 
        ).insertBefore('#button-chooser'); // Show weapon vs weapon messages. 

        changeWeaponMsgColor('flash'); // Flash colors for player's and computer's weapon messages to indicate battle in progress!

        updateScroll();

        setTimeout(function() { // Wait a little bit before:

            changeWeaponMsgColor('still');
            changeWeaponMsgSize(resultOfGame);

            $('#button-chooser').before('<div class="msg animate" id="msg-result"><span class="hal"><img class="avatar" src="hal_9000.png"><span class="msg-content">💥 ' +  resultOfGame + ' 💥<br><br>Current score:<br>Hal <strong>' + computerWins + ' : ' + playerWins + '</strong> You.</span></span></div>');

            setTimeout(function() { 
                if (playerWins < 3 && computerWins < 3 && i <= 5) {  
                    console.log(i);
                    if (i < 5) {
                        $('#button-chooser').before('<div class="msg animate" id="msg-result"><span class="hal"><img class="avatar" src="hal_9000.png"><span class="msg-content">' + currentMatchStatusComputerDialogue() + '</span></span></div>');
                    }
                    buttonChooser.style.display = "flex"; // Show weapon choice buttons again.
                }
                setTimeout(function() { 
                updateScroll(); // Scroll down to bottom of chatbox.
                }, 200);
            updateScroll(); // Scroll down to bottom of chatbox.
            }, 300);
            
            if (playerWins === 3 || computerWins === 3 || i === 5) {
                if (playerWins > computerWins) {
                    $('#button-chooser').before('<div class="msg animate" id="msg-result"><span class="hal"><img class="avatar" src="hal_9000.png"><span class="msg-content" style="background-color: rgb(217 229 253)">Fine, <strong>you win.</strong> K bye.</span></span></div><div class="msg animate"> <span class="player"> <div class="emoji">🥳</div> <div class="msg-content" style="background-color: rgb(212 241 213)">Hehe!</div> </span> </div>'); // You won the match!
                } else if (computerWins > playerWins) {
                    $('#button-chooser').before('<div class="msg animate" id="msg-result"><span class="hal"><img class="avatar" src="hal_9000.png"><span class="msg-content" style="background-color: rgb(249 214 214)">I win!!! <strong>You lose.</strong> Hehe. So about your vehicle\'s extended warranty... 🌈</span></span></div><div class="msg animate"> <span class="player"> <div class="emoji">😰</div> <div class="msg-content" style="background-color: rgb(218 214 235)">...</div> </span> </div>'); // You lost the match!
                } else if (playerWins === computerWins) { // If it's a tie:
                    $('#button-chooser').before('<div class="msg animate" id="msg-result"><span class="hal"><img class="avatar" src="hal_9000.png"><span class="msg-content" style="background-color: rgb(231 231 217)"><strong>A tied match! Hmph. </strong> I\'ll be back...</span></span></div><div class="msg animate"> <span class="player"> <div class="emoji">😐</div> <div class="msg-content" style="background-color: rgb(231 231 217)">...</div> </span> </div>'); // You tied the match.
                } else {
                    $('#button-chooser').before('<div class="msg animate" id="msg-result"><span class="hal"><img class="avatar" src="hal_9000.png"><span class="msg-content">ERROR: Unable to calculate winner.</span></span></div>');
                }
                $("#button-chooser").remove(); // Remove game buttons.

                let playAgain = document.getElementById("play-again");
                playAgain.style.display = "block";
            
            } else if (playerWins < 3 && computerWins < 3 && i === 4) { // If current round is 4, i.e. penultimate round:
                $('#button-chooser').before('<div class="msg animate" id="msg-result"><span class="hal"><img class="avatar" src="hal_9000.png"><span class="msg-content">1 final round to go!</span></span></div>'); // Show result message.
            } /* else if (i <= 3) { // If current round is 1, 2, or 3:
                $('#button-chooser').before('<div class="msg animate" id="msg-result"><span class="hal"><img class="avatar" src="hal_9000.png"><span class="msg-content">' + (5 - i) + ' rounds to go!</span></span></div>'); // Show result message. 
            } */

            updateScroll(); // Scroll down to bottom of chatbox.
            i++; // Add to round counter.
        }, 600);
       
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

let i = 1;
let playerWins = 0;
let computerWins = 0;

function scoreCounter(str) {
    if (str === loseMsg) {
        computerWins++;
    } else if (str === winMsg) {
        playerWins++;
    }
}

// send div of rock msg by player
const rock = document.getElementById("rock-btn");

rock.addEventListener("click", function() { // Listen to rock button, and if clicked, run the following function:
    playerSelection = 'Rock';
    game();
});


const paper = document.getElementById("paper-btn");
paper.addEventListener("click", function() {    
    playerSelection = 'Paper';
    game();
});

const scissors = document.getElementById("scissors-btn");
scissors.addEventListener("click", function() {
    playerSelection = 'Scissors';
    game();
});

$(document).keypress(function( event ) { 
    let buttonChooser = document.getElementById("button-chooser");
    if (buttonChooser.style.display === "flex" && playerWins < 3 && computerWins < 3 && i <= 5) {
        if ( event.which === 49 || event.which === 97 ) { // If 1 is pressed:
            playerSelection = 'Rock';
            game();
        } else if ( event.which === 50 || event.which === 98 ) { // Else if 2 is pressed:
            playerSelection = 'Paper';
            game();
        } else if ( event.which === 51 || event.which === 99 ) { // Else if 3 is pressed:
            playerSelection = 'Scissors';
            game();
        }
    }
});

function toggleFloatingHelp() {
    let x = document.getElementById("floating-help-msg");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}


window.onload = showComputerDialogue; //

function showComputerDialogue() {

    let floatingHelpMsg = document.getElementById("floating-help-msg");
    let msg1 = document.getElementById("msg1");
    let msg2 = document.getElementById("msg2");
    let msg3 = document.getElementById("msg3");
    let msg4 = document.getElementById("msg4");
    let buttonChooser = document.getElementById("button-chooser");
    let skip = document.getElementById("skip")
    let playAgain = document.getElementById("play-again");

    floatingHelpMsg.style.display = "none";
    msg1.style.visibility = "hidden";
    msg2.style.display = "none";
    msg3.style.display = "none";
    msg4.style.display = "none";
    buttonChooser.style.display = "none";
    playAgain.style.display = "none";

    $(document).keypress(function( event ) { // Make shortcut ENTER or RETURN that lets player skip dialogue.
        if ( event.which === 13 && msg4.style.display === "none") {
            console.log(msg1.style.visibility);
            msg1.style.visibility = "visible";
            msg2.style.display = "flex";
            msg3.style.display = "flex";
            msg4.style.display = "flex";
            buttonChooser.style.display = "flex";
            skip.style.display = "none";
            updateScroll();
        }
    });

    setTimeout(function() {
        msg1.style.visibility = "visible";
        updateScroll();
    }, 500);
    setTimeout(function() {
        msg2.style.display = "flex";
        updateScroll();
    }, 2500);
    setTimeout(function() {
        msg3.style.display = "flex";
        updateScroll();
    }, 4300);
    setTimeout(function() {
        msg4.style.display = "flex";
        updateScroll();
    }, 6200);
    setTimeout(function() {
        skip.style.display = "none";
        buttonChooser.style.display = "flex";
        updateScroll();
    }, 7800);
}

function skipIntro() {
    let msg1 = document.getElementById("msg1");
    let msg2 = document.getElementById("msg2");
    let msg3 = document.getElementById("msg3");
    let msg4 = document.getElementById("msg4");
    let buttonChooser = document.getElementById("button-chooser");
    let skip = document.getElementById("skip")
    let playAgain = document.getElementById("play-again");

    msg1.style.visibility = "visible";
    msg2.style.display = "flex";
    msg3.style.display = "flex";
    msg4.style.display = "flex";
    buttonChooser.style.display = "flex";
    skip.style.display = "none";
    updateScroll();
}
