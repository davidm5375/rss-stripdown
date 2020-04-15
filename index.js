var rss = require("./server.js");
var limit = rss.rateLimiter(100, 60000);
var server = rss.startServer(3000, "./src"); // src isn't defined.
// I thought it was defined as "dir" in server.js
// in that case, you're using the variable "src" as the "dir" parameter of your function
// I kind of needed to define the varaible "dir" as "src"
// I'm not sure I understand. In the startServer method you're asking for "port" and "dir" // oh I see
// yes

// should be working
// thanks
// If this was a NPM package, would i just call for the package name?
// express is an npm package, all you have to do is use the name, yes like in "const express = require('express')"

// well the problem is in your "./server.js" file you didn't tell node that you wanted "rateLimiter" and "startServer" to be used by whichever file requires it.

// https://stackoverflow.com/questions/61234650/how-do-you-use-a-javascript-function-from-another-file
// Yeah stackoverflow didnt fix anything
// ill take a look

// the answer was right, i added module.exports statements, which tells the current file that those are "sent from the other file"
// im not that good with explaining, but if you were to create a package or module or whatever the name is, you want to use "module.exports = {OBJECT}" :)
// we couldve used an object, actually, instead of sayingg module.export.rateLimiter, i couldve used module.exports = {rateLimiter, otherMethod}
// So where would i paste module.exports = {1, 2 ,3}
// thats in your required file, in server.js, i can change it, if you'd like me to
// if you know about javascript objects, you can define an object and add properties after like:
var obj = {}; // object
obj.property = "property";

console.log(obj); // { property: 'property' }


// TYSM
// thanks}
// Hi, i need a bit of help
//with what?
// So, Node.js is giving me an error about something
//I'm not a master at it but ill look okay?
// Thanks
// I put the logs in "logs.md"
// Yeah, I can't see whats wrong
// It's saying something is wrong
// hi i believe theres an error when you try requiring "./server.js", you didn't tell node how you want it to read the file? this might not make much sense may i try something out?
// I don't get what your saying
// sure
