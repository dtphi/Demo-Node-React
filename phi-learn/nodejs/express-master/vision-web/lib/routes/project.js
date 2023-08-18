var logger = require('vision-core').logger
, S = require('string')
, config = require('vision-core').configuration
, request = require('request')
, api = config.get('api:url');

exports.all = function(req, res){
  logger.info('Request.' + req.url);

  var userId = req.query.user || req.user.id;
  var url = api + '/project?user=' + userId ;

  request.get(url, function (error, response, body) {
    return res.json(response.statusCode, JSON.parse(body));
  });
};

exports.get = function(req, res){
  logger.info('Request.' + req.url);

  var url = api + '/project/' + req.params.id;

  request.get(url, function (error, response, body) {
    return res.json(response.statusCode, JSON.parse(body));
  });
};

exports.put = function(req, res){
  logger.info('Put.' + req.params.id);

  if (S(req.body.name).isEmpty() ) return res.json(400, 'Bad Request');

  var url = api + '/project/' + req.params.id;

  request.put(url, { form: req.body }, function (error, response, body) {
    return res.json(response.statusCode, body);
  });
};

exports.post = function(req, res){
  logger.info('Post.' + req.body.name);

  if (S(req.body.name).isEmpty() ) return res.json(400, 'Bad Request');

  var url = api + '/project/';

  request.post(url, { form: req.body }, function (error, response, body) {   
    var parsed = JSON.parse(body);
    res.location('/project/' +  parsed._id);
    return res.json(response.statusCode, parsed);
  });
};

exports.del = function(req, res){
  logger.info('Delete.' + req.params.id);

  var url = api + '/project/' + req.params.id;

  request.del(url, function (error, response, body) { 
    return res.json(response.statusCode, body);
  });
};