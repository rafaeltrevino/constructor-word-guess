const Letter = require("./Letter.js");

function Word(word) {
    this.word = word;
    this.letters = [];
};

Word.prototype.makeLettersArray = function () {
    let wordString = this.word.split("");
    for (i = 0; i < wordString.length; i++) {
        let character = new Letter(wordString[i]);
        this.letters.push(character);
    };
};

Word.prototype.makeWordMask = function() {
    let wordMask = "";
    this.letters.forEach(function(Letter) {
        wordMask += Letter.showCharacter();
    });
    console.log(wordMask.toUpperCase());
    return wordMask.toUpperCase();
};

Word.prototype.checkLetter = function(character) {
    for (i = 0; i < this.letters.length; i++) {
        this.letters[i].checkGuess(character);
    };
};

Word.prototype.maxGuesses = function() {
    return this.word.length;
};

Word.prototype.correctGuesses = function() {
    let counter = 0;
    for (i = 0; i < this.letters.length; i++) {
        if (this.letters[i].guessedYet === true) {
            counter++;
        };
    };
    return counter;
};

module.exports = Word;