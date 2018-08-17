/*jshint esversion: 6 */
// https://nodejs.org/dist/latest-v8.x/docs/api/os.html
const os = require('os');
const freemem = os.freemem();
const totalmem = os.totalmem();

console.log(`Fremem is ${freemem}`);
console.log(`Totalmem is ${totalmem}`);

const usedmem = totalmem - freemem;
console.log(`Used is ${usedmem}`);

// https://nodejs.org/dist/latest-v8.x/docs/api/fs.html
const fs = require('fs');

// this is a async function / this is why you can use it witout callback
const files = fs.readdirSync('./');
console.log(files);

// here is a good example of async and callbacks
// first param of readdir whitch is async is the folder
// the second argument is a callbackfunktion here called function
// this function takes two arguments
// standart err and a name you can choose / here otherfiles
// then comes the callback functions body {}
// and in this callback only one will be filled..
// so you can check if err is null then there is a result in in this case 'otherfiles'

fs.readdir('./', function(err, otherfiles) {
  if (err) console.log('Error', err);
  else console.log('Files', otherfiles);
});
