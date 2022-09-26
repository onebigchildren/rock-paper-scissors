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

    if ( (playerSelection.trim()).match(/^rock$/i) === true ) {
        if ( computerSelection.match('Rock') === true ) {
            return 'You tied!\nRock ties with rock.';
        } else if ( computerSelection.match('Paper') === true ) {
            return 'You lose!\nPaper beats rock.';
        } else {
            return 'You win!\nRock crushes scissors.';
        }

    } else if ( (playerSelection.trim()).match(/^paper$/i) === true ) {
        if ( computerSelection.match('Rock') === true ) {
            return 'You win!\nPaper beats rock.';
        } else if ( computerSelection.match('Paper') === true ) {
            return 'You tied!\nPaper ties with paper.';
        } else {
            return 'You lose!\nScissors chop up paper.';
        }

    } else if ( (playerSelection.trim()).match(/^scissors$/i) === true ) {
        if ( computerSelection.match('Rock') === true ) {
            return 'You lose!\nRock crushes scissors.';
        } else if ( computerSelection.match('Paper') === true ) {
            return 'You win!\nScissors chop up paper.';
        } else {
            return 'You tied!\nScissors tie with scissors.';
        }

    } else {
        return 'Error! Player Selection not valid.'
    }
}