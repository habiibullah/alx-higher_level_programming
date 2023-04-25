#!/usr/bin/node

const filename = process.argv[2];
const texts = process.argv[3];
const fs = require('fs');
fs.writeFile(filename, texts, 'utf8', function (err) {
  if (err) {
    console.log(err);
  }
});
