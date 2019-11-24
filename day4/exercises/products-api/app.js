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

let freeID = 2;

// Getting an individual product
app.get('/api/products/:id', function(req, res) {
  const id = parseInt(req.params.id);

  let product = products.filter( (item) => {
    return item.id == id;
  });

  if( product.length == 0 ){
    res.result(404).send();
    return;
  }

  res.send(JSON.stringify(product));

});

// adding a new product to the collection
app.post('/api/products', function(req, res) {
  let product = req.body;
  console.log(product);
  product.id = freeID;
  freeID ++;
  products.push(product);

  res.location('/api/products/' + product.id);
  res.status(204);
  res.send();
});

/*
* EXCERCISE: End the implementation
*/

// Get all the products

app.get('/api/products', (req, res) => {

  res.status(200);
  res.send(JSON.stringify(products));

});


// Delete the product

app.delete('/api/products/:id', (req, res) => {

  let id = parseInt(req.params.id);
  products = products.filter((item) => item.id != id);
  res.status(200).send();
  console.log(products);

});

app.put('/api/products/:id', (req, res) => {

  let id = parseInt(req.params.id);
  let queryProduct = req.query;
  let product = products.find((item) => {
    item.id != id;
  });
  if( product && queryProduct ){

    product.name = queryProduct.name;
    product.description = queryProduct.description;

  }

  res.status(200).send();

});
