function Letter(underlyingCharacter) {
    this.underlyingCharacter = underlyingCharacter;
    this.guessedYet = false;
};

Letter.prototype.showCharacter = function () {
    if (this.guessedYet) {
        return ` ${this.underlyingCharacter} `;
    } else {
        return ` _ `;
    };
};

Letter.prototype.checkGuess = function (character) {
    if (character == this.underlyingCharacter) {
        return this.guessedYet = true;
    };
};

module.exports = Letter;