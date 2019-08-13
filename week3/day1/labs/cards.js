class Card {
    constructor(value, suit) {
        switch (value) {
            case 1:
                this.value = "Ace";
                break;
            case 11:
                this.value = "Jack";
                break;
            case 12:
                this.value = "Queen";
                break;
            case 13:
                this.value = "King";
                break;
            default:
                this.value = value;
                break;
        }
        this.suit = suit;
    }

    get toString() {
        return `Card { ${this.value} of ${this.suit} }`;
    }
}

class Deck {
    constructor() {
        this.cards = this.reset();
    }

    reset() {
        return [...Array(13).keys()].reduce((acc, value) => {
            acc = acc.concat(
                ["Clubs", "Spades", "Hearts", "Diamonds"].reduce(
                    (acc, suit) => {
                        acc.push(new Card(value, suit));
                        return acc;
                    },
                    []
                )
            );
            return acc;
        }, []);
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    draw() {
        return this.cards.pop();
    }
}

let deck = new Deck();
deck.shuffle();
console.log(deck.draw().toString);
