var app = require('../app')
 , request = require('supertest');

describe('vision heartbeat api', function(){

  describe('when requesting resource /heartbeat', function(){
    it('should respond with 200', function(done){
      request(app)
        .get('/heartbeat')
        .auth('airasoul', '1234567890')
        .expect('Content-Type', /json/)
        .expect(200, done)
        
    });
  });

  describe('when requesting resource /missing', function(){
    it('should respond with 404', function(done){
      request(app)
        .get('/missing')
        .auth('airasoul', '1234567890')
        .expect('Content-Type', /json/)
        .expect(404, done);
    })
  });
});