const express = require("express");
const app = express();
const rateLimit = require("express-rate-limit");
function rateLimiter(request, ms) {
  app.set("trust proxy", 1);

  const limiter = rateLimit({
    windowMs: ms,
    max: request
  });
  //  apply to all requests
  app.use(limiter);
}
function startServer(port, dir) {
  app.use(express.static(dir));
  const listener = app.listen(port, function() {
    console.log("Your app is listening on port " + listener.address().port);
  });
}
function addRoute(route, path){
  app.get(route, (request, response) => {
  response.sendFile(__dirname + path);
});}
module.exports = {rateLimiter, startServer, addRoute} // files will be able to access everything you put in there.
// thanks