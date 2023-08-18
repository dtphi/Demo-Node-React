var mongoose = require('mongoose')
, config = require('../configuration')
, connectionString = config.get("mongo:url")
, options = { server: { auto_reconnect: true, poolSize: 4 } };

mongoose.connection.open(connectionString, options);