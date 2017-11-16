console.log("Up and running!");
// represents the cards of the game
var cards = ['queen', 'queen', 'king', 'king'];
// represents the cards in play
var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[2];
cardsInPlay.push('cardOne');
cardsInPlay.push('cardTwo');
console.log("User flipped king")

if (cardOne === cardTwo) {
	alert('You found a match!');	
} else {
  alert('Sorry, try again.');
}
