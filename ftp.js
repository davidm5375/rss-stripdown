const ftpd = require('simple-ftpd')

ftpd({ host: '127.0.0.1', port: 1337, root: '/public/files' }, (session) => {

  session.on('pass', (username, password, cb) => {
    if (username === 'superadmin' && password === '53cr3t') {
      session.readOnly = false
      session.root = '/private/secret/files'
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