const express = require("express");
const app = express();
const rateLimit = require("express-rate-limit");

module.exports.rateLimiter = (request, ms) => {
  app.set("trust proxy", 1);

  const limiter = rateLimit({
    windowMs: ms,
    max: request
  });
  //  apply to all requests
  app.use(limiter);
}
// function rateLimiter(request, ms) {
//   app.set("trust proxy", 1);

//   const limiter = rateLimit({
//     windowMs: ms,
//     max: request
//   });
//   //  apply to all requests
//   app.use(limiter);
// }

module.exports.startServer = (port, dir) => {
  app.use(express.static(dir));
  const listener = app.listen(port, function() {
    console.log("Your app is listening on port " + listener.address().port);
  });
}
// function startServer(port, dir) {
//   app.use(express.static(dir));
//   const listener = app.listen(port, function() {
//     console.log("Your app is listening on port " + listener.address().port);
//   });
// }

module.exports.addRoute = (route, path) => {
  app.get(route, (request, response) => {
  response.sendFile(__dirname + path);
});}
// function addRoute(route, path){
//   app.get(route, (request, response) => {
//   response.sendFile(__dirname + path);
// });}