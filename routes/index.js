/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
	api: importRoutes('./api'),
};

// Setup Route Bindings
exports = module.exports = function (app) {
	// Views
	app.get('/', routes.views.index);

	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);
	app.get('/api/event', routes.api.event.list);
	app.get('/api/event/:id', routes.api.event.get);
	app.post('/api/event', routes.api.event.create);
	app.put('/api/event/:id', routes.api.event.update);
	app.delete('/api/event/:id', routes.api.event.remove);

	app.get('/api/food', routes.api.food.list);
	app.get('/api/food/:id', routes.api.food.get);
	app.post('/api/food', routes.api.food.create);
	app.put('/api/food/:id', routes.api.food.update);
	app.delete('/api/food/:id', routes.api.food.remove);

	app.get('/api/outdoors', routes.api.outdoors.list);
	app.get('/api/outdoors/:id', routes.api.outdoors.get);
	app.post('/api/outdoors', routes.api.outdoors.create);
	app.put('/api/outdoors/:id', routes.api.outdoors.update);
	app.delete('/api/outdoors/:id', routes.api.outdoors.remove);

	app.get('/api/shopping', routes.api.shopping.list);
	app.get('/api/shopping/:id', routes.api.shopping.get);
	app.post('/api/shopping', routes.api.shopping.create);
	app.put('/api/shopping/:id', routes.api.shopping.update);
	app.delete('/api/shopping/:id', routes.api.shopping.remove);

	app.get('/api/sight', routes.api.sight.list);
	app.get('/api/sight/:id', routes.api.sight.get);
	app.post('/api/sight', routes.api.sight.create);
	app.put('/api/sight/:id', routes.api.sight.update);
	app.delete('/api/sight/:id', routes.api.sight.remove);
};
