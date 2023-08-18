var cluster = require('cluster')
, http = require('http')
, numCPUs = require('os').cpus().length
, logger = require('../logger')
, domain = require('domain');

function Cluster() {}

Cluster.prototype.run = function(module){
  if (cluster.isMaster) {
    for (var i = 0; i < numCPUs; i++) {
      cluster.fork();
    }

    cluster.on('exit', function(worker, code, signal) {
      logger.info('Worker ' + worker.process.pid + ' died');
      cluster.fork();
    });
  } else {
    var d = domain.create();

    d.on('error', function(err) {
      logger.info('Error ', err);
      process.exit(1);
    });

    d.run(function() {
      require(module);
    });
  }
}

module.exports = Cluster;