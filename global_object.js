// these are global objects in js
console.log('foo');

setTimeout(() => {
    console.log('baaar')
}, 1000);
clearTimeout();

setInterval(() => {
    console.log('shdhsidishidh')
}, 10000);
clearInterval();

// js in the browser you have this
// window.console.log();
// in js all is globaly availeble

//when you define a var or let or const
// const
var a = 'my text';
console.log(a);
// let

// in js they are global and found in 
// window.myconst
// hoever in node this is not the case.. a var is not globaly defined
// var's are only usable in the module or file it is definded..
// 


// wichitg, in Node.js gibts kein window
// dafür gibt es das global object
global.console.log('baaar');
global.setTimeout(() => {
    console.log('kasodokooo')
}, 5000);