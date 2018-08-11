/*jshint esversion: 6 */
// this is a simple log function
// when this function is called
//it simply console log the content of logmessage that was given to to function
function logger(logmessage) {
    console.log(logmessage);
}

logger('output some log message');

// this is a simple class with a method
// use CamelCase for classes!!!
class Logger {
    // inside a class functions are called methods and dont need the function keyword
    logger(logmessage) {
        console.log(logmessage);
    }
}

// mach ne instanz von der Klasse logger
const tmplogger = new Logger();

// nun nutze die instanz bzw. die methode logger in der instanz oder im object um etwas zu loggen
tmplogger.logger('using object method to log something');