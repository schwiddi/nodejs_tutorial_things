/*jshint esversion: 6 */
// how you load
const a = require('./mylogmodule'); // make it a const helps you so you dont overwrite it by accident

console.log(a);

// now cause you exported it in mylogmodulejs
// you can use it here

console.log(a.myurlglobal);

// here i'm using the function defined in mylogbla
a.myLogModuleGlobal('my own log messages');