// 1.
let baseURL = "https://deckofcardsapi.com/api/deck/";  

async function singleDraw() {
  let response = await $.getJSON(`${baseURL}/new/draw/?count=1`) 
  let { suit, value } = response.cards[0];
    console.log(`You have drawn the ${value} of ${suit}`);
}
singleDraw()
// Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: undefined
// async_deck_of_cards.js:7 You have drawn the 9 of CLUBS

// 2.
let baseURL = "https://deckofcardsapi.com/api/deck/";  

async function drawTwo() {
  let response = await $.getJSON(`${baseURL}new/draw/?count=2`);
    response.cards.forEach(card => {
        let { suit, value } = card;
        console.log(`You have drawn the ${value} of ${suit}`);
    })
}
drawTwo();
// async_deck_of_cards.js:20 You have drawn the 9 of CLUBS
// async_deck_of_cards.js:20 You have drawn the 5 of CLUBS

// 3. 
$(document).ready(function () {
  let baseURL = "https://deckofcardsapi.com/api/deck/";
  let deckId;

  async function drawAll() {
    let deckResponse = await $.getJSON(`${baseURL}new/shuffle/?deck_count=1`);  
    deckId = deckResponse.deck_id;
    $("#drawButton").show() 
  }
  $("#drawButton").click(async function (){
    let response = await $.getJSON(`${baseURL}${deckId}/draw/?count=1`);
      if (response.cards.length > 0) {
        let { suit, value } = response.cards[0];
        $("#card-container").append(`<p>You drew the ${value} of ${suit}</p>`);
      } 
  })
  drawAll();
});

// You drew the 10 of HEARTS
// You drew the 8 of DIAMONDS
// You drew the 6 of HEARTS
// You drew the 10 of CLUBS
// You drew the JACK of CLUBS
// You drew the 8 of HEARTS
// You drew the 2 of HEARTS
// You drew the 3 of SPADES
// You drew the ACE of SPADES
// You drew the JACK of SPADES...etc.
