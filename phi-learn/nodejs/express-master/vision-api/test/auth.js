var app = require('../app')
, request = require('supertest')
, assert = require('assert')

describe('vision authentication', function(){
  describe('/request with basic authentication', function() {
    it('should authenticate request', function(done) {
      request(app)
      .get('/heartbeat')
      .auth('airasoul', '1234567890')
      .expect('Content-Type', /json/)
      .expect(200, done)
    });
  });

  describe('/request without basic authentication', function() {
    it('should not authenticate request', function(done) {
      request(app)
      .get('/heartbeat')
      .expect(401, done)
    });
  });
});