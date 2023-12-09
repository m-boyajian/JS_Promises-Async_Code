// 1.
let baseURL = "http://numbersapi.com";
let favoriteNumber = 11;

async function lucky11() {
    let data = await $.getJSON(`${baseURL}/${favoriteNumber}?json`);
    console.log(data)
}
lucky11();
// {text: '11 is the number of denominations of Canadian currency produced in large quantities.', number: 11, found: true, type: 'trivia'}
// found
// : 
// true
// number
// : 
// 11
// text
// : 
// "11 is the number of denominations of Canadian currency produced in large quantities."
// type
// : 
// "trivia"
// [[Prototype]]
// : 
// Object

// 2.
const favoriteNumbers = [32, 666, 48];
let baseURL = "http://numbersapi.com";
async function threeFaves() {
    let data = await $.getJSON(`${baseURL}/${favoriteNumbers}?json`)
    console.log(data);
}
threeFaves();
// {32: '32 is the number of completed, numbered piano sonatas by Ludwig van Beethoven.', 48: '48 is the number of Ptolemaic constellations.', 666: '666 is the number of the devil.'}

// 3.
let baseURL = "http://numbersapi.com";
let favoriteNumber = 11;
let fourFactsAboutFavoriteNumber = [];

async function fourFacts() {
    for (let i = 1; i < 5; i++) {
        let data = await $.getJSON(`${baseURL}/${favoriteNumber}?json`);
        fourFactsAboutFavoriteNumber.push(data);
    }
    const favoriteNumberArr = await Promise.all(fourFactsAboutFavoriteNumber);
    favoriteNumberArr.forEach(response => {
        console.log(response);
    });
}

fourFacts();
// {text: '11 is the number of players in an American football team on the field at one time during play.', number: 11, found: true, type: 'trivia'}
// async_number_facts.js:48 {text: '11 is the miles per hours that the fastest moving land snake, the Black Mamba, can move.', number: 11, found: true, type: 'trivia'}
// async_number_facts.js:48 {text: '11 is the number of players in a field hockey team.', number: 11, found: true, type: 'trivia'}
// async_number_facts.js:48 {text: '11 is the number of pounds one gallon of pure maple syrup weighs.', number: 11, found: true, type: 'trivia'}
