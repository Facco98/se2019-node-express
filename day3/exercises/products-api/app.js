/**
 * app.js
 * Implementation of the Product API
 */

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use('/', express.static('public'));

// starting the server
const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Products server listening at http://localhost:' + port);
});

// list of products we'll keep in memory
let products = [
  {
    id: 1,
    name: 'iPhone XL',
    description: 'Extra large'
  }
];

// Getting an individual product
app.get('/api/products/:id', function(req, res) {
  const id = parseInt(req.params.id);

  if (id > products.length || id < 1) {
    res.status(404).send();
    return;
  }

  res.send(products[id - 1]);
});

// adding a new product to the collection
app.post('/api/products', function(req, res) {
  let product = req.body;
  product.id = products.length + 1;
  products.push(product);

  res.location('/api/products/' + product.id);
  res.status(204);
  res.send();
});

/*
/ Implementation of the missing methods.
*/

// Gets the list of all products
app.get('/api/products', (request, response) => {

  response.type('application/json').status(200).send(JSON.stringify(products));


});

// Deletes the element with the specified id
app.delete('/api/products/:id', (request, response) => {

  const id = parseInt(request.params.id);

  products = products.filter( product => {
    return id !== product.id;
  });

  for( let i = id-1; i < products.length; i++ ){

    products[i].id -= 1;

  }


  response.location('/api/products/');
  response.status(200);
  response.send();

});
