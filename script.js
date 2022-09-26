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

