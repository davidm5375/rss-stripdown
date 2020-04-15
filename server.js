const express = require("express");
const app = express();
const rateLimit = require("express-rate-limit");

// This is the rate limit
if (process.env.RATELIMITENABLED === "true") {
  app.set("trust proxy", 1);

  const limiter = rateLimit({
    windowMs: process.env.MS,
    max: process.env.REQUEST
  });
  //  apply to all requests
  app.use(limiter);
}
// This is the "online" status
if (process.env.STATUS === "online") {
  // Static Files
  app.use(express.static(process.env.MAINDIR));

  // Basic Routing & Page Rules

  app.get("/", function(request, response) {
    response.sendFile(__dirname + "/" + process.env.MAINDIR + "/index.*");
  });

  // status
  app.get(process.env.STATUSURL, (req, res) => res.send("200 OK"));

}
// This is the offliine status
if (process.env.STATUS === "offline") {
  app.get("/", function(request, response) {
    response.sendFile(__dirname + "/api/status/offline.html");
  });
  

  
  
  // Booting up the server
  const listener = app.listen(process.env.PORT, function() {
    console.log("Your app is listening on port " + listener.address().port);
  });
}
