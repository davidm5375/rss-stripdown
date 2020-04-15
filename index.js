const rss = require("./server.js");
var limit = rss.rateLimiter(100, 60000);
var server = rss.startServer(3000, src);
// Hi, i need a bit of help
//with what?
// So, Node.js is giving me an error about something
//I'm not a master at it but ill look okay?
// Thanks
// I put the logs in "logs.md"