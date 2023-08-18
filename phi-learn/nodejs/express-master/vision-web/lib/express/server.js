  var fs = require('fs')
  , http = require('http')
  , https = require('https');

function Server(app){
  if (process.env['NODE_ENV'] === "production") return http.createServer(app).listen(app.get('port'));

  var httpsOptions = {
    key: fs.readFileSync('./lib/secure/key.pem'),
    cert: fs.readFileSync('./lib/secure/cert.pem')
  };

  return https.createServer(httpsOptions,app).listen(app.get('port'));
}

module.exports = Server;