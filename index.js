var server = require("./server.js");
server.rateLimiter(100, 60000);
server.startServer(3000, "./src");