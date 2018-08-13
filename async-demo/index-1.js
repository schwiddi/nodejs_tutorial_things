/*jshint esversion: 6 */

// Simple demo of the asyncronus behavior of js
console.log('Before...');

setTimeout(() => {
    console.log('Waited 5 Seconds');
  }, 5000);

console.log('After...');

// this is actualy a callback funktion in js
// setTimeout takes a callback function as the 1. arg
// oldschool written like that
setTimeout(function() {
    console.log('Waited 5 Seconds');
}, 5000); // and as a 2 arg the amount of miliseconds

// newschool written like that
setTimeout(() => {
    console.log('Waited 5 Seconds');
  }, 5000);

// so what js now does it registered that in 5 second the thread has to come back
// and in 5 seconds the thread comes and calls the callback function in this case
// the console.log thing