//https://nodejs.org/dist/latest-v8.x/docs/api/events.html

// import blueprint for events
const EventEmitter = require('events');
// cause this is a class we have to make our object from it
const emitter = new EventEmitter();



// so i'm making here a listern
// emitter.addListener(eventName, listener)
// today we do this with on
// note that this on oder addListener has a callback function
emitter.on('myEventName', function(){
    console.log('listerner for the event named "myEventName" was called by an emitter')
})

emitter.on('myEventName2', function(takesSomeArgs){
    console.log('another listener was called', takesSomeArgs) // also give out the args
})

// now we have emitter.emit() --> https://nodejs.org/dist/latest-v8.x/docs/api/events.html#events_emitter_emit_eventname_args
emitter.emit('myEventName') // in order to work you have register a listener before..

setTimeout(() => {
    emitter.emit('myEventName')
}, 5000);

setTimeout(() => {
    emitter.emit('myEventName2', { id: 1, url: 'http://www.something.net'}) // here i give some args
}, 10000);

// es6 got arrow functions, with this we can get rid of function in the callback
// this goes like that
// first arg is the event string that this is ON
// second it takes args
// and then comes the fat arrow
emitter.on('myEventName3', (takesSomeArgs) => {
    console.log('another listener was called', takesSomeArgs) // also give out the args
})
emitter.emit('myEventName3', { id: 3, url: 'http://www.sample.net'}) // here i give some args