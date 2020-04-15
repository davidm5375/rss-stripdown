require('dotenv').config()
const ftpd = require('simple-ftpd')

ftpd({ host: process.env.FTPHOST, port: process.env.FTPPORT, root: process.env.FTPROOT }, (session) => {

  session.on('pass', (username, password, cb) => {
    if (username === process.env.FTPUSER && password === process.env.FTPPASS) {
      session.readOnly = false
      session.root = '/'
      cb(null, 'Welcome admin')
    } else {
      cb(null, 'Welcome guest')
    }
  })

  session.on('stat', fs.stat)
  // AKA
  // session.on('stat', (pathName, cb) => {
  //  fs.stat(pathName, cb)
  // })

  session.on('readdir', fs.readdir)
  // AKA
  // session.on('readdir', (pathName, cb) => {
  //   fs.readdir(pathName, cb)
  // })

  session.on('read', (pathName, offset, cb) => {
    cb(null, fs.createReadStream(pathName, { start: offset }))
  })

  session.on('write', (pathName, offset, cb) => {
    cb(null, fs.createWriteStream(pathName, { start: offset }))
  })

  // I'd do some checking if I were you, but hey.

  session.on('mkdir', fs.mkdir)
  session.on('unlink', fs.unlink)
  session.on('rename', fs.rename)
  session.on('remove', require('rimraf'))
})