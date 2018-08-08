var Deck = require('./Deck.js');
var Hand = require('./Hand.js');

function BlackJack(bet, callback) {
  this.bet = bet;
  
  // Create a new deck and shuffle it
  this.deck = new Deck().shuffle();

  // Create a new hand for the player
  this.player = new Hand();

  // Create a new hand for the House
  this.house = new Hand();
  
  // The player draws two cards from the deck
  this.player.add(this.deck.draw());
  this.player.add(this.deck.draw());
//
//  // House gets a card
  this.house.add(this.deck.draw());
//  console.log(this.house.toString());
  // Report the Hands delt
  var s = "\nYour Hand:\n" + this.player.toString() + "\nHouse Hand:\n" + this.house.toString();
  
  // House gets a card hidden to the player
  this.house.add(this.deck.draw());
  
  return callback(s);
}

// Deal or House plays. 0 = playing, 1 = player win, 2 = house win
BlackJack.prototype.play = function(hit, callback) {
  console.log("Doing a play");
  if (hit) {
    console.log("Player Hit");
    this.player.add(this.deck.draw());
    var s = "";
    console.log(this.player.bust());
    if (this.player.bust()) {
      console.log("Player Busted on Hit");
      s = "BUST\n" + this.player.toString();
      return callback(2, s);
    } else {
      s = "\n" + this.player.toString();
      return callback(0, s);
    }
  } else {
    console.log("Player stayed");
    s = "STAYING\n" + this.player.toString();
    console.log("House score: " + this.house.score());
    if(this.house.score() > this.player.score() && !this.house.bust()) {
        s = "\nYou lost!\nYour hand: \n" + this.player.toString() + "\nHouses Hand: \n" + this.house.toString();
        return callback(2, s);
    }
    while(!this.house.bust() && this.house.score() <= this.player.score()) {
      console.log("House draw");
      this.house.add(this.deck.draw());
      s = "\nHouse Drew Another\n" + this.house.toString();
    
      if(this.house.bust()) {
        console.log("House bust");
        s = "\nYou win!\nYour hand: \n" + this.player.toString() + "\nHouses Hand: \n" + this.house.toString();
        return callback(1, s);
      }

      if(!this.house.bust() && this.house.score() > this.player.score()) {
        console.log("House won");
        s = "\nYou lost!\nYour hand: \n" + this.player.toString() + "\nHouses Hand: \n" + this.house.toString();
        return callback(2, s);
      }
    }
  }
}

module.exports = BlackJack;
