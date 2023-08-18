exports.index = function(req, res){
  var model = {
    title: 'vision.', 
    description: 'a project based dashboard for github', 
    author: 'airasoul',
    user: req.isAuthenticated() ? req.user.displayName : ''
  };

  if (process.env['NODE_ENV'] === "production" || process.env['NODE_ENV'] === "development") {
    model.csrftoken = req.csrfToken();
  };

  res.render('index', model);
};
