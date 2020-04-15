const ftpServer = require('ftp-srv'); 
const bunyan = require(‘bunyan’); 
 
export const startFtpServer = async (host: string, port: number, user: string, pass: string) => {  
  const quietLog = bunyan.createLogger({ 
    name: 'quiet-logger', 
    level: 60, 
  }); 
  
  const server = new ftpServer(`ftp://${host}:${port}`, { 
    log: quietLog, 
    pasv_range: process.env.FTPRANGE, // change this to an open port range for your app 
  }); 
  
  server.on('login', ({ connection, username, password }, resolve, reject) => { 
    if (username === process.env.FTPUSER && password === process.env.FTPPASS) { 
      // If connected, add a handler to confirm file uploads 
      connection.on('STOR', (error, fileName) => { 
        if (error) { 
          console.error(`FTP server error: could not receive file ${fileName} for upload ${error}`); 
        } 
        console.info(`FTP server: upload successfully received - ${fileName}`); 
      }); 
      resolve(); 
    } else { 
      reject(new Error('Unable to authenticate with FTP server: bad username or password')); 
    } 
  }); 
  
  server.on('client-error', ({ context, error }) => { 
    console.error(`FTP server error: error interfacing with client ${context} ${error} on ftp://${host}:${port} ${JSON.stringify(error)}`); 
  }); 
  
  const closeFtpServer = async () => { 
    await server.close(); 
  }; 
  
  // The types are incorrect here - listen returns a promise 
  await server.listen(); 
  
  return { 
    shutdownFunc: async () => { 
      // server.close() returns a promise - another incorrect type 
      await closeFtpServer(); 
    }, 
  }; 
}; 