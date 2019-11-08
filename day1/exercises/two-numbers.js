const assert = require("assert");
const argv = process.argv;

assert(argv.length == 4, "Devi fornire esattamente due parametri" );

assert(!isNaN(argv[2]) && !isNaN(argv[3]), "I due parametri devono essere numeri!");

console.log("Tutto ok!");
