/*jshint esversion: 6 */

class User {  // you build a class
    constructor(arg1, arg2, arg3) { // the constructor takes the argument name
      this.name = arg1; // you set a property this.name with the value of the given arg
      console.log(`Constructor was called and this.name was set to ${this.name}`);
      this.arg2 = arg2;
      console.log(`arg2 was set to ${this.arg2}`);

      this.welcomertext = arg3;
    }

    sayHi() {           // then u define the first own method of your class
      console.log(`Hi i'm ${this.name}`); // then you log the prop called this.name that you have set in the constructor
    }

    ownHelloText() {
        console.log(`${this.welcomertext} ${this.name}`);
    }
}

// then you create an instance an pass the nickname of the user for example
const userschwiddi = new User("Schwiddi");

// now lets use the method called sayHi
// so see it better, give it a little offset
setTimeout(() => {
    console.log('calling the method sayHi');
    userschwiddi.sayHi();    
}, 5000);

// and spawn another instance called James
const userjames = new User('James', 'blabla', 'i would like to welcome you');


// and now call the second method you've made
setTimeout(() => {
    console.log('calling the method ownHelloText');
    userjames.ownHelloText();    
}, 10000);