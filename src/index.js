'use strict';
var m = require('mithril');

require('./style.css');

var input = {
  view: function(ctrl, args) {
    var inputAttributes = args.input || {};

    return m('div', [
      m('label', args.label || ''),
      m('input', {
        oninput: m.withAttr('value', args.bind),
        value: args.bind(),
        name: inputAttributes.name || '',
        type: inputAttributes.type || 'text'
      })
    ]);
  }
};

var navLink = {
  controller: function(args) {
    return {
      activeClass: m.route() === args.href ? ' active' : ''
    };
  },
  view: function(ctrl, args) {
    return m('a', {
      'class': (args.classes || '') + ctrl.activeClass,
      href: args.href,
      config: m.route
    }, args.content || args.href);
  }
};

var navigation = {
  view: function() {
    return m('div', [
      m.component(navLink, {classes: 'nav-link', href: '/', content: 'Default Home'}),
      m.component(navLink, {classes: 'nav-link', href: '/completed', content: 'Filter = "completed"'}),
      m.component(navLink, {classes: 'nav-link', href: '/about', content: 'About'})
    ]);
  }
};

// Most basic of all.
var homeComponent = {
  controller: function() {
    var filterValue = m.route.param('filter') || '';

    return {
      input: m.prop(filterValue)
    };
  },
  view: function(ctrl) {
    return m('div', [
      m.component(navigation),
      m.component(input, {
        label: 'Filter',
        bind: ctrl.input,
        input: {
          name: 'filter'
        }
      }),
      m('h1', ctrl.input())
    ]);
  }
};

var aboutComponent = {
  view: function() {
    return m('div', [
      m.component(navigation),
      m('p', 'This is a demo project that shows step-by-step how common web problems are solved using Mithril.')
    ]);
  }
};

m.route.mode = 'hash';

m.route(document.querySelector('#mithril-demo'), '/from query param!', {
  '/:filter': homeComponent,
  '/about': aboutComponent
});
