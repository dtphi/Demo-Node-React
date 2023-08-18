var config = require('vision-core').configuration;

function ApiAuth() {
  this.passport = require('passport');
  var BasicStrategy = require('passport-http').BasicStrategy;

  this.passport.use(new BasicStrategy({
  },
    function(username, password, done) {
      findUser(username, password, function(err, status) {
        return done(null, status);
      })
    }  
  ));

  var findUser = function(username, password, callback){
    var usernameOk = config.get('api:username') === username;
    var passwordOk = config.get('api:password') === password;
    callback(null, usernameOk === passwordOk);
  }
};

module.exports = new ApiAuth();