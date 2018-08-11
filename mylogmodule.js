
const myurl = 'http://schwiddi.internet-box.ch'


function myLogModule(logstring) {
    console.log(logstring);
}


// now use the modul object to export the function in the global object

module.exports.myLogModule = myLogModule;

// or exporting a variable

module.exports.myurl1 = myurl; // on the right is the name inside the module
// and on the left that what you are about to export