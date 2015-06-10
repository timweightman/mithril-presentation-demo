'use strict';

// This routes module is the bread-and-butter of the application.
// We'll configure the routes for each of the pages in the app, and
// ensure that they're properly combined into the main page template.
var pageTemplate = require('./common/pageTemplate');

// There might be other kinds of page templates that we could use to
// mix components into, and then we'd mix those into the main page
// template as well.

// Note that home itself is just a simple mithril component.
var home = require('./home/home');

// It's understood that any component could be mixed into the main
// page template and render as a page in its own right, but that
// doesn't stop us from using the component in other contexts,
// such as modal dialogs, or in sidebars, etc. It's just a component.
var homePage = pageTemplate(home);

// Here we're defining the actual routes that are going to be used
// in our application, and what component or template should be used
// to render that route.
// The routes defined here will render their respective component
// into whichever element was supplied to m.route, in index.js
var routes = {
  '/': homePage
};

module.exports = routes;
