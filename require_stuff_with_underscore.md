
// importing underscore
// as it was instelled with npm i underscore (--save is no longer needed / it does it automaticly)
var _ = require('underscore');

// then us underscore.contains to check if a 3 is in the array before
// writing the output of the function in de var result
var result = _.contains([1, 2, 3], 3);

// and then log out the result
console.log(result);

// and here the other way around
var result = _.contains([1, 2, 3], 9);
console.log(result);

//you can get it to run but it does nothing to nowhere
_.contains([1, 2, 3, 4, 5], 10);
// but you can use it inside a function but leave the ; inside the function
console.log(_.contains([1, 2, 3, 4, 5], 2));
