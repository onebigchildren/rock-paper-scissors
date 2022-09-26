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

function playRound(playerSelection, computerSelection) {

    if ( (/^rock$/i).test(playerSelection.trim()) === true ) {
        if ( computerSelection === 'Rock' ) {
            return 'You tied!\nYour rock ties with HAL 9000\'s rock.';
        } else if ( computerSelection === 'Paper' ) {
            return 'You lose!\nHAL 9000\'s paper beats your rock.';
        } else {
            return 'You win!\nYour rock crushes HAL 9000\'s scissors.';
        }

    } else if ( (/^paper$/i).test(playerSelection.trim()) === true ) {
        if ( computerSelection === 'Rock' ) {
            return 'You win!\nYour paper beats HAL 9000\'s rock.';
        } else if ( computerSelection === 'Paper' ) {
            return 'You tied!\nYour paper ties with HAL 9000\'s paper.';
        } else {
            return 'You lose!\nHAL 9000\'s scissors chop up your paper.';
        }

    } else if ( (/^scissors$/i).test(playerSelection.trim()) === true ) {
        if ( computerSelection === 'Rock' ) {
            return 'You lose!\nHAL 9000\'s rock crushes your scissors.';
        } else if ( computerSelection === 'Paper' ) {
            return 'You win!\nYour scissors chop up HAL 9000\'s paper.';
        } else {
            return 'You tied!\nYour scissors tie with HAL 9000\'s scissors.';
        }

    } else {
        return 'Error! Player selection not valid.'
    }
}

let computerSelection = getComputerChoice()