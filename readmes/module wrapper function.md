# the module wrapper function
# this is just good to know that tis is happening in the background wenn you load something with require
# so when you load a other js module this it self will be wrapped and has some args for standard..

this thing is around everything you inlcude with require

(function (exports, require, module, __filename, __dirname) {
    function myLogModule(logstring) {
        console.log(logstring);
    }
    
    module.exports = myLogModule;
}