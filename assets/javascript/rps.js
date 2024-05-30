const GAME_RESULT = {
        USER_WINS: 0,
        TIE_GAME: 1,
        COMPUTER_WINS: 2
}

let statistics = {
    numWins: 0,
    numLosses: 0,
    numTies: 0,
    r: 0,
    p: 0,
    s: 0
}

const CHOICE_ROCK = "R";
const CHOICE_PAPER = "P";
const CHOICE_SCISSORS = "S";

const validChoices = [ "R","P","S" ];

let usersChoice;

playTheGame();

function getRandomChoice() {
        let randomSeed = Math.random();
        let randomIndexRough = randomSeed * 3;
        let randomIndex = Math.floor(randomIndexRough);
        let computersChoice = validChoices[randomIndex];
        return computersChoice;
}

function decideGame(usersChoice, computersChoice) {
        if (usersChoice === computersChoice) {
                ++statistics.numTies;
                alert(`Smooth. It's a tie`);
        } else if (
                (usersChoice === CHOICE_PAPER && computersChoice === CHOICE_ROCK) ||
                (usersChoice === CHOICE_ROCK && computersChoice === CHOICE_SCISSORS) ||
                (usersChoice === CHOICE_SCISSORS && computersChoice === CHOICE_PAPER)
        ) {
                ++statistics.numWins;
                alert("You just won like a jelly-jelly gun");
        } else {
                ++statistics.numLosses;
                alert("If losses were hosses then you you'd be ridin'");
        }
}

function playTheGame() {
        while(true) {
                usersChoice = getUsersChoice();
                alert(`you chose ${usersChoice}`);
                let computersChoice = getRandomChoice();
                alert(`computer chose ${computersChoice}`);
                decideGame(usersChoice, computersChoice);

                let wantToPlayAgain = confirm("Want to play again?");
                console.log("wantToPlayAgain: " + wantToPlayAgain);
                if (!wantToPlayAgain)
                        break;
        }

        displayStatistics ();
}

function getUsersChoice (){
        let playersMove = prompt("(R)ock, (P)aper, or (S)cissors?").toUpperCase();
        console.log(playersMove);
        if (validChoices.includes(playersMove)) {
                switch(playersMove) {
                        case("R"):
                                ++statistics.r;
                                break;
                        case("P"):
                                ++statistics.p;
                                break;
                        default:
                                ++statistics.s;
                }
                
                ++statistics[playersMove];
                return playersMove;
        }
        else {
                alert(`${playersMove} is not a valid choice, Binky`);
                return getUsersChoice();
        }
}

function displayStatistics () {
        console.log("wins: " + statistics.numWins);
        console.log("losses: " + statistics.numLosses);
        console.log("ties: " + statistics.numTies);

        alert(
        `Game Results
        Wins: ${statistics.numWins}
        Losses: ${statistics.numLosses}
        Ties: ${statistics.numTies}

        Your moves
        Rock: ${statistics.r}
        Paper: ${statistics.p}
        Scissors: ${statistics.s}
                `
        );
}

