var config = require('./settings');

var routes = {};

routes[config.apiRoute+'/user'] = require('./controllers/UserController');
routes[config.apiRoute+'/login'] = require('./controllers/LoginController');
routes[config.apiRoute+'/products'] = require('./controllers/ProductController');

module.exports = routes;
