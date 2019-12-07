// const http = require('http');

// const server = http.createServer((req,res) => {
// 	res.end('hello world from node js updated nodemon');
// });

// server.listen(3000);

// const express = require('express');

// const app = express();

// app.get('/', (req,res) => {
// 	res.send('Hey from express');
// });

// app.listen(3000);

const fs = require("fs");

const fileName = "target.txt";

// fs.watch(fileName, () => {
// 	console.log("File Changed");
// });

// fs.readFile(fileName, (err, data) => {
// 	if(err) {
// 		console.log(err);
// 	}
// 	console.log(data.toString());
// });

// const data = fs.readFileSync(fileName);
// console.log(data.toString());

const errHandler = err => console.log(err);
const dataHandler = data => console.log(data.toString());
fs.readFile(fileName, (err, data) => {
	if(err) errHandler(err);
	dataHandler(data);
});

console.log('Node js async prog....');