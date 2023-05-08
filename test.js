const expect = chai.expect
const assert = chai.assert
// const Deck = require('./script.js'); 

describe('Deck', () => {
  describe('constructor', () => {
    it('should create a deck with 52 cards', () => {
      const deck = new Deck();
      expect(deck.totalCards.length).to.equal(52);
    });
  });

  describe('shuffle', () => {
    it('should shuffle the cards in the deck', () => {
      const deck1 = new Deck();
      const deck2 = new Deck();
      deck2.shuffle();
      // The chance of two shuffled decks being in the same order is very small
      expect(deck1.totalCards).to.not.deep.equal(deck2.totalCards);
    });
  });

  describe('cardDistribute', () => {
    it('should distribute the cards in the deck equally between two players', () => {
      const deck = new Deck();
      const [p1, p2] = deck.cardDistribute();
      expect(p1.length).to.equal(26);
      expect(p2.length).to.equal(26);
    });
  });
});
