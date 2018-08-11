# the module wrapper function

this thing is around everything you inlcude with require

(function (exports, require, module, __filename, __dirname) {
    function myLogModule(logstring) {
        console.log(logstring);
    }
    
    module.exports = myLogModule;
}