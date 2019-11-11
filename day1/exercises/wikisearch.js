/* Implement your solution here */
const fetch = require('node-fetch');

const argument = process.argv[2] || 'Albert Einstein';
const url =  `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(argument)}&format=json`;

let printTop5 = async (searchTerm) => {

  let res = await fetch(url);
  let json = await res.json();
  let queryResults = json.query.search;

  for( let i = 0; i < 5 && i < queryResults.length; i++ ){

    console.log(queryResults[i].title);

  }

};

printTop5(argument);
