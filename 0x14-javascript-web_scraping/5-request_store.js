#!/usr/bin/node

const url = process.argv[2];
const filepath = process.argv[3];
const fs = require('fs');
const request = require('request');

request(url, (err, res, body) => {
  if (err) console.error(err);
  fs.writeFile(filepath, body, err => {
    if (err) console.error(err);
  });
});
