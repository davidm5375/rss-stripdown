var rss = require("./server.js");
var limit = rss.rateLimiter(100, 60000);
var server = rss.startServer(3000, src); // src isn't defined.
// I thought it was defined as "dir" in server.js

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
