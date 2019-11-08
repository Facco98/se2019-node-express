/* Implement your solution here */
const fetch = require("node-fetch");
let url = "http://api.icndb.com/jokes/random";

fetch(url)
  .then((res) => res.json())
  .then((json) => console.log(json.value.joke));
