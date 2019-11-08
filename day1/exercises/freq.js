/* Implement your solution here */

const fs = require("fs");
const filePath = process.argv[2] || "./tags.txt";

var data = fs.readFileSync(filePath, "utf8");

data = data.split("\n");

var dict = new Map();

data.forEach((value) => {

  if( typeof( dict[value] ) == "undefined" )
    dict[value] = 0;
  dict[value]++;

});

Object.keys(dict).forEach((key) => {

  console.log(key + "   ->   " + dict[key]);

})
