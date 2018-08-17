/*jshint esversion: 6 */

class Myownclass {
  // define classes in Pascal naming convention
  // a class can have methods not functions
  loggermesomething(argument) {
    console.log(argument);
  }

  // and of course it has constructors
  constructor() {
    console.log('Constructor was executed..');
    this.name = `we try to set a property name`;
    this.otherprop = 'test it';
  }
}

// now that we have our class
// we make an instance or object of it in the runtime env
// we us the new es6 standard and pack this into a const
const myFirstObject = new Myownclass(); // that () is imported dont no why by i think it tells the compiler to execute my class
// no you should see that the constructor was called cause we now have a instance of Myownclass

// now try to make a second instance of it
const mySecondInstanceOfMyClass = new Myownclass();

// now log out the property name of the second instance
console.log(mySecondInstanceOfMyClass.name);
// or the other prop
console.log(mySecondInstanceOfMyClass.otherprop);

// now calling just that i didnt did this for nothing
// i'll call my own method on the top
mySecondInstanceOfMyClass.loggermesomething('test string');
