const Deck = {
    cards: [],

    reset() {
        const numbers = [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "J",
            "Q",
            "K"
        ];
        const suits = ["spades", "clubs", "hearts", "diamonds"];

        return numbers.reduce((result, number) => {
            suits.forEach(suit => {
                result.push({ suit: suit, number: number });
            });
            return result;
        }, []);
    },

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    },

    draw() {
        return this.cards.pop();
    }
};

Deck.cards = Deck.reset();
Deck.shuffle();
console.log(Deck.draw());
