#!/usr/bin/node

// printing the status code of a GET request

const request = require('request');
const url = 'https://swapi-api.alx-tools.com/api/films/' + process.argv[2];
request(url, function (err, res, body) {
  if (err) {
    console.log(err);
  }
  const data = JSON.parse(body);
  console.log(data.title);
});
