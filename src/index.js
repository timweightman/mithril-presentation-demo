'use strict';
var m = require('mithril');
var domready = require('domready');
var routes = require('./routes');

// We need to define the mode that we want to use for all
// of the routing in our application.
// It is possible to use search, hash or pathname.
m.route.mode = 'hash';

domready(function() {

  // This kicks off our applicaiton.
  // The routes that have been defined will control what gets
  // rendered into document, and the application will start
  // at the root '/' route, which will need to have been
  // defined in the routes variable.
  m.route(document, '/', routes);
});
