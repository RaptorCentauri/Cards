class Deck {
  constructor() {
    // this.deck
    this.createCardMap();
    this.createDeck();
  }

  createCardMap = () => {
    this.cardMap = new Map()

    for (let i = 1; i <= 52; i++) {
        this.cardMap.set(i, {suit: `${this.setSuit(i)}`, display: `${this.setDisplay(i)}`})
    }
  }


  createDeck = () => {
    this.deck = [...this.cardMap.keys()]
  }

  setSuit = (id) => {
    if (id <= 13) {
      return 'Heart'
    }
    else if (id <= 26) {
      return 'Diamond'
    }
    else if (id <= 39) {
      return 'Spade'
    }
    else if (id <= 52) {
      return 'Club'
    }
  }

  setDisplay = (id) => {
    if (id % 13 === 1) {
      return 'Ace'
    }
    else if (id % 13 === 12) {
      return 'Queen'
    }
    else if (id % 13 === 11) {
      return 'Jack'
    }
    else if (id % 13 === 0) {
      return 'King'
    }
    else{
      return id%13
    }
  }

  drawCard = () =>{
    let id = Math.floor(Math.random() * this.cardMap.size)
    return this.cardMap.get(id);
  }

  sayCard = (card) => `${card.display} of ${card.suit}'s`

  getSuit = (card) => `${card.suit}`

  getDisplay = (card) => `${card.display}`

  cutDeck = () => {
    for (let i = 0; i < 26; i++) {
      [this.deck[i], this.deck[26+i]] = [this.deck[26+i], this.deck[i]]
    }
  }


  drawFromTop = () => this.deck[0]

  drawFromBottom = () => this.deck[this.deck.length-1]


  deal = (c) => {
    let hand = new Set()

    do {
      hand.add(this.deck[c])
      c--;
    } while (c >= 0);

    return hand;
  }

  shuffle = () => {
    for (let i = this.deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
  }



  getAllSuit = (suit) => {
    let suitSet = new Set();

    for (let [key, value] of this.cardMap) {
      if(value.suit === suit){
        suitSet.add(key)
      }
    }

    return suitSet;
  }



  getAllDisplay = (display) => {
    let displaySet = new Set();

    for (let [key, value] of this.cardMap) {
      if(value.display === display){
        displaySet.add(key)
      }
    }

    return displaySet;
  }


  getIDofCard = (display, suit) => {
    for (let [key, value] of this.cardMap) {
      if(value.display == display && value.suit == suit){
        return key;
      }
    }
  }

}


let myDeck = new Deck();

console.log(myDeck.deck);
// myDeck.shuffle();
// console.log(myDeck.drawFromTop());
// console.log(myDeck.deal(5));
// console.log(myDeck.getAllSuit('Club'));
// console.log(myDeck.getAllDisplay('Ace'));
// console.log(myDeck.getIDofCard('Ace','Club'));


// myDeck.cutDeck();

// console.log(myDeck.deck);

// myDeck.createCardMap();

// myDeck.createDeck();

// let cardOne = myDeck.drawCard();

// console.log(myDeck.getSuit(cardOne));



/*
{id: {Suit, Value, display}}




*/
