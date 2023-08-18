var schedule = require('node-schedule')
  , logger = require('vision-core').logger
  , Populate = require('./lib/cache/populate')
  , domain = require('domain');

var d = domain.create();

d.on('error', function(err) {
  logger.info('Error ', err);
});

d.run(function() {
  var populate = new Populate();
  schedule.scheduleJob('*/1 * * * *', function(){
    populate.run(function(err) {
      if (err) logger.error('Redis Population error', err);
      if (!err) logger.info('Redis Population complete');
    });
  });
});