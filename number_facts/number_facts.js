// 1. Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the ***json*** query key, specific to this API. [Details](http://numbersapi.com/#json).

let baseURL = "http://numbersapi.com";
let favoriteNumber = 11;

$.getJSON(`${baseURL}/${favoriteNumber}?json`, response => {
    favoriteNumber = response;
    console.log("done", response);
});
// number_facts.js:12 done {text: '11 is the number of denominations of Canadian currency produced in large quantities.', number: 11, found: true, type: 'trivia'}found: truenumber: 11text: "11 is the number of denominations of Canadian currency produced in large quantities."type: "trivia"[[Prototype]]: Object

// 2. Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.
let baseURL = "http://numbersapi.com";
let n1 = 32;
let n2 = 666;
let n3 = 48;

axios
    .get(`${baseURL}/${n1}/`)
    .then(response1 => {
        console.log(`Interesting fact about the number ${n1}: ${response1.data}`);
        return axios.get(`${baseURL}/${n2}/`);
    })
    .then(response2 => {
        console.log(`Interesting fact about the number ${n2}: ${response2.data}`);
        return axios.get(`${baseURL}/${n3}/`);
    })
    .then(response3 => {
        console.log(`Interesting fact about the number ${n3}: ${response3.data}`);
    })
    .catch(err => {
        console.log(`Oops, there was a problem :( ${err}`);
    });

// Interesting fact about the number 32: 32 is the percentage of employees in the USA who eat lunch and work at the same time.
// number_facts.js:25 Interesting fact about the number 666: 666 is the number of the devil.
// number_facts.js:29 Interesting fact about the number 48: 48 is the number of Ptolemaic constellations.

// 3. Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.
let fourFactsAboutFavoriteNumber = [];
let baseURL = "http://numbersapi.com";
let favoriteNumber = 11;

for (let i = 1; i < 5; i++) {
    fourFactsAboutFavoriteNumber.push(
    axios.get(`${baseURL}/${favoriteNumber}/`)
  );
}

Promise.all(fourFactsAboutFavoriteNumber)
  .then(favoriteNumberArr => {
    favoriteNumberArr.forEach(response => {
        console.log(response.data);    
        }); 
    })
    .catch(err => console.log(err));
// 11 is the number of players on a soccer team on the field at a time as well as in a cricket team.
// number_facts.js:53 11 is the number of players in a field hockey team.
// number_facts.js:53 11 is the number of denominations of Canadian currency produced in large quantities.
// number_facts.js:53 11 is the miles per hours that the fastest moving land snake, the Black Mamba, can move.