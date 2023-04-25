#!/usr/bin/node
const filenames = process.argv[2];
const fs = require('fs');
fs.readFile(filenames, 'utf8', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
