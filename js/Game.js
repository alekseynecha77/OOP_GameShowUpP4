/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(game) {
        this.game = game;
        this.phrases= [
            new Phrase ("Alex is a pro at coding"),
            new Phrase ("clouds on the top of icloud"),
            new Phrase ("not enough memory"),
            new Phrase ("in my phone"),
            new Phrase ("another time my phone said")

        ];

    }
    /**
     * random phrase from the phrases array
     * @returns {String} phrase
     */
    getRandomPhrase(){
        return this.phrases[Math.floor(Math.random() * 5)];
        };
}

