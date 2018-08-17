/*jshint esversion: 6 */
const myurl = 'http://schwiddi.internet-box.ch';
console.log(module);
console.log(__filename);
console.log(__dirname);

function myLogModule(logstring) {
  console.log(logstring);
}

// now use the modul object to export the function as an Object in the global object

module.exports.myLogModuleGlobal = myLogModule;

// or exporting a variable

module.exports.myurlglobal = myurl; // on the right is the name inside the module
// and on the left that what you are about to export

// you can also just export a function
// different to before where you exported an object that contains a function

// module.exports = myLogModule;
// you can not use it here cause you exported other thins already
