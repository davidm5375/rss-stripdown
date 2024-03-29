const express = require("express");
const app = express();
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
function sendMsg(route, message){
  app.get(route, function (req, res) {
  res.send(message)
})
}
module.exports = {startServer, addRoute, sendMsg}