  // webDAV server
  const webdav = require("webdav-server").v2;
  const server = new webdav.WebDAVServer();
  app.use(webdav.extensions.express("/", server));
  // User manager
  const userManager = new webdav.SimpleUserManager();
  const user = userManager.addUser(process.envFTPUSER, process.envFTPPASS, false);
  // Privileges
  const privilegeManager = new webdav.SimplePathPrivilegeManager();
  privilegeManager.setRights(user, "/", ["all"]); 