'use strict';

var mixinLayout = require('./helpers/mixinLayout');

var polyfill = require('./polyfill');
var navigation = require('./navigation');

function pageLayout(ctrl, args, views) {
  return m('html', [
    m('head', [
      m('title', 'Mithril Demo - ' + ctrl.title())
    ]),
    m('body', [
      // Page header
      m('header', [
        m('nav.nav-main', [
          m.component(navigation)
        ])
      ]),

      // Output the content view where we want it
      m('div.content', [
        views.content
      ]),

      // Page footer
      m('footer', [
        m.trust('&copy; '), '2015 Tim Weightman'
      ]),

      // Add the polyfill script. Thanks to intelligent DOM
      // diffing, this script tag will not need to redraw or
      // download more than once, unless its node changes.
      polyfill,

      // We must use m.trust here to prevent infinite reload
      // m.trust will not auto-run the script. The idea here
      // is that we have run index.js already at this point,
      // and so while it is correct to keep the script tag
      // in the DOM, it would not be good to re-initialise
      // our whole app.
      m.trust('<script src="index.js"></script>')
    ])
  ]);
}

module.exports = function(body) {
  return {
    controller: body.controller,
    view: mixinLayout(pageLayout, {content: body.view})
  };
};
