// you do things when 2 or more promises are ready
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('async operation 1');
    resolve('result of ops1');
    //reject(new Error('something went horribly wrong'));
  }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('async operation 2');
    resolve('result of ops2');
    //reject(new Error('something went horribly wrong'));
  }, 5000);
});

// so i have created two promises

// with all you can fire of something when these two are resolved
// this will create a new promise that is fullfilled in this case
Promise.all([promise1, promise2]).then(bla => console.log(bla));

// see the output of this program
// it is crucual to understand that you now have both
// resolve(THIIIIIIS) results in the all Promise

// --> https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Promise
