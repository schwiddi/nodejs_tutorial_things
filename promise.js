

// a promise takes a function with to args as arg
const p = new Promise(function(resolve, reject) {

});

// when you create a promise it will be in the pending state
// after finished it will be resolved/fullfilled or rejected

// or here in arrow function syntax
const p2 = new Promise((resolve, reject) => {
    // do here some async work
    // ...
    const result = 'this was my async result';

    // when its finished we would like to have a result or an error
    // or to say a value or an error

    // use resolve() or reject(new Error('Message'))
    // to get the answer to the caller of the promise
    
    // use settimeout to demo some async operation
    setTimeout(() => {
        resolve(result);
        //reject(new Error('Message'));
    }, 3000);
});

// now to consume a Promise
// use. catch for error or .then when the answer was resolved
p2.then(someresult => {
    console.log('Result: ', someresult)
});

// or shortend
p2.then(somebla => console.log('Result: '+ somebla));

// or to catch the error
p2.catch(err => console.log('Error: ', err.message));

// in practice we use it like that / called chaining
// p2
//     .then(somebla => console.log('Result: '+ somebla));
//     .catch(err => console.log('Error: ', err.message));




/// IMPORTANT:
// überall wo du async operationen machst solltest du das mit promises lösen



// create for testing an already resolved Promise
const bla = Promise.resolve('bla');
bla.then(resultfrompromise => console.log(resultfrompromise));


// this ofcourse can aslo be rejected

const bla2 = Promise.reject(new Error('bla2'));
bla2.catch(someerror => console.log(someerror));

// keep in mind with errors it is common practice to create e new Error
// object as a return / this will inlcude a callstack
// and this is better to analyse