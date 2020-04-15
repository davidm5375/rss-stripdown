const express = require("express");
const app = express();
const rateLimit = require("express-rate-limit");


(request, ms) {
  app.set("trust proxy", 1);

  const limiter = rateLimit({
    windowMs: ms,
    max: request
  });
  //  apply to all requests
  app.use(limiter);
}
startServer: function(port, dir) {
  app.use(express.static(dir));
  app.get("/", function(request, response) {
    response.sendFile(__dirname + "/" + dir + "/index.*");
  });
  app.get(process.env.STATUSURL, (req, res) => res.send("200 OK"));
  const listener = app.listen(port, function() {
    console.log("Your app is listening on port " + listener.address().port);
  });
}


module.exports = {rateLimiter, startServer}  r: function(port, dir) {s