// 1. Make a request to the [Deck of Cards API](http://deckofcardsapi.com/) to request a single card from a newly shuffled deck. Once you have the card, ***console.log*** the value and the suit (e.g. “5 of spades”, “queen of diamonds”).
let baseURL = "https://deckofcardsapi.com/api/deck/";

$.getJSON(`${baseURL}/new/draw/?count=1`, response => {
    let { suit, value } = response.cards[0];
    console.log(`You have drawn the ${value} of ${suit}`);
});
// You have drawn the 4 of DIAMONDS

// 2. Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the **same** deck. Once you have both cards, ***console.log*** the values and suits of both cards.

let baseURL = "https://deckofcardsapi.com/api/deck/";

$.getJSON(`${baseURL}new/draw/?count=2`, response => {
    response.cards.forEach(card => {
        let { suit, value } = card;
        console.log(`You have drawn the ${value} of ${suit}`);
    });
});
// You have drawn the ACE of HEARTS
// deck_of_cards.js:19 You have drawn the 9 of DIAMONDS

// 3. Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.
$(document).ready(function () {
    let baseURL = "https://deckofcardsapi.com/api/deck/";
    let deckId;

    $.getJSON(`${baseURL}new/shuffle/?deck_count=1`, data => {
    deckId = data.deck_id;
    $("#drawButton").show()
    });
    $("#drawButton").click(function (){
        $.getJSON(`${baseURL}${deckId}/draw/?count=1`, response => {
            if (response.cards.length > 0) {
                let { suit, value } = response.cards[0];
                $("#card-container").append(`<p>You drew the ${value} of ${suit}</p>`);
            } 
        })
    });
});
// You drew the 4 of DIAMONDS
// You drew the ACE of CLUBS
// You drew the 8 of SPADES
// You drew the QUEEN of HEARTS
// You drew the 4 of SPADES
// You drew the JACK of HEARTS
// You drew the 2 of CLUBS
// You drew the 10 of CLUBS
// You drew the 7 of CLUBS
// You drew the ACE of DIAMONDS
// You drew the JACK of SPADES
// You drew the KING of SPADES
// You drew the ACE of HEARTS
// You drew the 3 of DIAMONDS
// You drew the QUEEN of DIAMONDS
// You drew the 9 of CLUBS
// You drew the 3 of HEARTS
// You drew the 5 of CLUBS
// You drew the 3 of CLUBS
// You drew the 10 of DIAMONDS
// You drew the QUEEN of CLUBS
// You drew the 9 of DIAMONDS
// You drew the 6 of SPADES
// You drew the 7 of SPADES
// You drew the 9 of SPADES
// You drew the 2 of DIAMONDS
// You drew the JACK of CLUBS
// You drew the 5 of DIAMONDS
// You drew the 9 of HEARTS
// You drew the 2 of HEARTS
// You drew the 7 of HEARTS
// You drew the 7 of DIAMONDS
// You drew the 4 of HEARTS
// You drew the 6 of DIAMONDS
// You drew the 5 of HEARTS
// You drew the KING of CLUBS
// You drew the JACK of DIAMONDS
// You drew the 3 of SPADES
// You drew the 2 of SPADES
// You drew the 8 of DIAMONDS
// You drew the ACE of SPADES
// You drew the 5 of SPADES
// You drew the 10 of HEARTS
// You drew the QUEEN of SPADES
// You drew the KING of HEARTS
// You drew the 4 of CLUBS
// You drew the 6 of CLUBS
// You drew the 10 of SPADES
// You drew the KING of DIAMONDS
// You drew the 8 of HEARTS
// You drew the 6 of HEARTS
// You drew the 8 of CLUBS