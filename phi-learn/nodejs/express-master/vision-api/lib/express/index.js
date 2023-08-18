var express = require('express')
  , http = require('http')
  , config = require('vision-core').configuration
  , db = require('vision-core').db
  , apiAuth = require('../auth')
  , middleware = require('../middleware')
  , routes = require('../routes')
  , app = express();

app.set('port', process.env.PORT || config.get('express:port'));
app.use(express.logger({ immediate: true, format: 'dev' }));
app.use(express.bodyParser());
app.use(apiAuth.passport.initialize());
app.use(app.router);

app.all('*', apiAuth.passport.authenticate('basic', { session: false }));
app.param('id', middleware.id.validate);
app.get('/heartbeat', routes.heartbeat.index);
app.get('/project/:id', routes.project.get);
app.get('/project', routes.project.all);
app.post('/project', routes.project.post);
app.put('/project/:id', routes.project.put);
app.del('/project/:id', routes.project.del);
app.get('/project/:id/repos', routes.github.repos);
app.get('/project/:id/commits', routes.github.commits);
app.get('/project/:id/issues', routes.github.issues);
app.use(middleware.notFound.index);

http.createServer(app).listen(app.get('port'));
module.exports = app;

console.log('running on port ', app.get('port'));