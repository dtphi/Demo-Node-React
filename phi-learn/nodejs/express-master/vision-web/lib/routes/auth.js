var logger = require('vision-core').logger

exports.callback = function(req, res) {
  logger.info('Request.' + req.url);
  res.redirect('/'); 
};

exports.login = function(req, res){
  logger.info('Request.' + req.url);
};

exports.logout = function(req, res){
  logger.info('Request.' + req.url);
  req.logout();
  res.redirect('/');
};