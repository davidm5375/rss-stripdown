const express = require('express');
const app = express();
if (process.env.STATUS === 'online') {



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
  app.get(process.env.MAINDIR, (req, res) => res.send('This server is Offline'))
}
