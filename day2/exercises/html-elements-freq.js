/* Implement your solution here */
const fetch = require("node-fetch");
const fs = require("fs").promises;

const filePath = process.argv[2] || "./tags.txt";
const url = process.argv[3] || "https://google.com";

const printTags = async (filePath, url) => {

  let tags = await fs.readFile(filePath, "utf8");
  tags = tags.split("\n");
  delete tags[tags.length-1];
  let page = await fetch(url);
  let text = await page.text();
  tags.forEach( (tag) => {

    console.log(tag+">", text.split(tag).length-1);

  });

}

printTags(filePath, url);
