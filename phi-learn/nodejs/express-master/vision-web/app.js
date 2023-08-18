console.log('NODE_ENV', process.env['NODE_ENV']);

switch (process.env['NODE_ENV']) {
  case 'COVERAGE':
    module.exports = require('./lib-cov/express');
    break;
  case 'TEST':
    module.exports = require('./lib/express');
    break;
  default:
    var Cluster = require('vision-core').cluster
    , cluster = new Cluster();
    cluster.run(__dirname + '/lib/express');
    break;
}