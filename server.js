const express = require('express');
const app = express();
// This is the "online" status
if (process.env.STATUS === 'online') {

  const rateLimit = require("express-rate-limit");
 
// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
app.set('trust proxy', 1);
 
const limiter = rateLimit({
  windowMs: 15 * 60, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
 
//  apply to all requests
app.use(limiter);


// Static Files
app.use(express.static(process.env.MAINDIR));

// Basic Routing & Page Rules
  
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/src/index.*');
});

  // API 
app.get(process.env.API, (req, res) => res.send('200 OK'))

  // Start the Server
  
  
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

}

// This is the offliine status
if (process.env.STATUS === 'offline') {

  app.get('/', function(request, response) {
  response.sendFile(__dirname + '/api/offline.html');
});
  const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
}
