module.exports = function(grunt) {
  grunt.registerTask('drop', 'drop the database', function() {
    var mongoose = require('mongoose')
    , db = require('vision-core').db

    // async mode
    var done = this.async();


    mongoose.connection.once('open', function () {
      mongoose.connection.db.dropDatabase(function(err) {
        if(err) {
          console.log(err);
          done();
        } else {
          console.log('Successfully dropped db');
          done();
        }
      });
    });
  });
};