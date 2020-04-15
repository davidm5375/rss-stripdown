var server = require('./server.js');
server.startServer('3000', 'src')
server.sendMsg('/status', 'This is a test.')