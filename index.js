class Card { //card class

    constructor(suit, card) { //parameters to hold value
    
    this.suit = suit;
    
    this.card = card;
    
    }
    
    }
    
    class Deck { //deck class
    
    constructor() {
    
    this.cards = [];
    
    }
    
    createCard(suits, values) { //a deck within the deck class
    
    for(let suit of suits) { //for loop
    
    for(let card of values) {
    
    this.cards.push(new Card(suit, card)); //pushing into array
    
    }
    
    }
    
    return this.cards.length;
    
    }
    
    deal() { //let's us deal the new cards
    
    let hand = []; //blank array
    
    while(hand.length < 2) { //deals two cards for 2 people
    
    hand.push(this.cards.pop()); //push then pop after finish
    
    }
    
    return hand;
    
    }
    
    shuffle () { //let's us shuffle
    
    //this.cards.sort((a,b) => Math.random() - 0.5) //This won't sort by random
    
    let counter = this.cards.length, temp, i;
    
    while(counter) { //loop the cards
    
    i = Math.floor(Math.random() * counter--); //decrement
    
    temp = this.cards[counter];
    
    this.cards[counter] = this.cards[i];
    
    this.cards[i] = temp;
    
    }
    
    return this.cards;
    
    }
    
    }
    
    let suits = [
    
    'Hearts',
    
    'Spades',
    
    'Dia',
    
    'Clubs',
    
    ];
    
    let values = [
    
    'Ace',
    
    'King',
    
    'Queen',
    
    'Jack',
    
    10, 9, 8, 7, 6, 5, 4, 3, 2, 1
    
    ];
    
    let cards = new Deck(suits, values);
    
    cards.createCard(suits, values);
    
    cards.shuffle();
    
    console.log(cards.deal());