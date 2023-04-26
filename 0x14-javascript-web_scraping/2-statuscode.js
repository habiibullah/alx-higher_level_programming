#!/usr/bin/node

const url = process.argv[2];
const request = require('request');

request(url, function (_err, res) {
  console.log('code:', res.statusCode);
});
