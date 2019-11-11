/* Implement your solution here */
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = !isNaN(process.argv[2]) ? process.argv[2] : 8080;
const firstName = 'Zlatan';
const lastName = 'Ibrahimovic';
const url = `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`;

app.get('/', (request, response) => {
  console.log('Ciao mondo');
  response.status(200).send('Per utilizzare il servizio visita <a href="./zlatan-joke"> /zlatan-joke </a>');

});

app.get('/zlatan-joke', async (request, response) => {

  let res = await fetch(url);
  let json = await res.json()
  const joke = json.value.joke;
  response.status(200).send(joke);

});

app.listen(port, () => console.log(`Server is listening on port ${port}`));
