const Word = require("./Word.js");
const inquirer = require("inquirer");

const wordPlay = {
    wordBank: ["APPLE", "SAMSUNG", "MICROSOFT", "ALPHABET", "INTEL", "IBM", "FACEBOOK", "HONHAIPRECISION", "TENCENT", "ORACLE"],
    wordInPlay: function () {
        let randomNum = Math.floor(Math.random() * 11);
        return wordPlay.wordBank[randomNum];
    },
    userGuesses: -1
};

let wordInPlay = new Word(wordPlay.wordInPlay());

const playGame = function () {
    console.clear();
    console.log("\n\n\n")
    wordInPlay.makeWordMask();
    wordPlay.userGuesses++;

    if (wordInPlay.correctGuesses() == wordInPlay.letters.length) {
        console.log("\nCongrats! You won!\n");
    } else if (wordPlay.userGuesses == wordInPlay.letters.length) {
        console.log(`\nSorry, no more guesses. The correct answer was ${wordInPlay.word}.\n`);
    } else if (wordPlay.userGuesses < wordInPlay.letters.length) {
        let remaining = wordInPlay.letters.length - wordPlay.userGuesses;
        console.log(`\nYou have ${remaining} guesses remaining.\n`);

        inquirer.prompt([{
            name: "letterGuess",
            type: "input",
            message: "Guess a letter: "
        }]).then(function (userInput) {
            wordInPlay.checkLetter(userInput.letterGuess.toUpperCase());
            playGame();
        });
    };
};

function start() {
    inquirer.prompt([{
        name: "ready",
        type: "list",
        message: "\n\n\n\nWelcome to Tech Guess! For this game, you will type a letter to guess the Top 10 Tech Company being presented.\nAre you ready to play?",
        choices: ["Yes", "No"]
    }]).then(function (userInput) {
        if (userInput.ready == "Yes") {
            wordInPlay.makeLettersArray();
            playGame();
        } else {
            console.clear();
        };
    });
};

console.clear();
start();