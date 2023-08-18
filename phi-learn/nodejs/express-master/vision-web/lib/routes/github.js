var logger = require('vision-core').logger
, config = require('vision-core').configuration
, request = require('request')
, api = config.get('api:url');

exports.repos = function(req, res){
  logger.info('Request.' + req.url);

  var url = api + '/project/' + req.params.id + "/repos";

  request.get(url, function (error, response, body) {
    return res.json(response.statusCode, JSON.parse(body));
  });
};

exports.commits = function(req, res){
  logger.info('Request.' + req.url);

  var url = api + '/project/' + req.params.id + "/commits";

  request.get(url, function (error, response, body) {
    return res.json(response.statusCode, JSON.parse(body));
  });
};

exports.issues = function(req, res){
  logger.info('Request.' + req.url);

  var url = api + '/project/' + req.params.id + "/issues";

  request.get(url, function (error, response, body) {
    return res.json(response.statusCode, JSON.parse(body));
  });
};