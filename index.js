var server = require('./server.js');
server.startServer('3000', 'src')
server.sendMsg('/test', 'This is a test.')