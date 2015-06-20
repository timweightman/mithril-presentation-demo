'use strict'
var m = require('mithril')

require('./style.css')

var input = {
  view: function(ctrl, args) {
    var inputAttributes = args.input || {}

    return m('div', [
      m('label', args.label || ''),
      m('input', {
        oninput: m.withAttr('value', args.bind),
        value: args.bind(),
        name: inputAttributes.name || '',
        type: inputAttributes.type || 'text'
      })
    ])
  }
}

var navLink = {
  controller: function(args) {
    return {
      isActive: m.route() === args.href
    }
  },
  view: function(ctrl, args) {
    if (ctrl.isActive) {
      // Render a span if this is the active route.
      return m('span', {
        'class': args.classes + ' active'
      }, args.content || args.href)
    }

    // Render a link if this is not the active route.
    return m('a', {
      'class': (args.classes || ''),
      href: args.href,
      config: m.route
    }, args.content || args.href)
  }
}

var navigation = {
  view: function() {
    return m('div', [
      m.component(navLink, {classes: 'nav-link', href: '/', content: 'Home'}),
      m.component(navLink, {classes: 'nav-link', href: '/completed', content: 'Completed'}),
      m.component(navLink, {classes: 'nav-link', href: '/about', content: 'About'})
    ])
  }
}

// Most basic of all.
var homeComponent = {
  controller: function() {
    var filterValue = m.route.param('filter') || ''

    return {
      input: m.prop(filterValue)
    }
  },
  view: function(ctrl) {
    return m('div', [
      m.component(input, {
        label: 'Filter',
        bind: ctrl.input,
        input: {
          name: 'filter'
        }
      }),
      m('h1', ctrl.input())
    ])
  }
}

var aboutComponent = {
  view: function() {
    return m('div', [
      m('p', 'This is a demo project that shows step-by-step how common web problems are solved using Mithril.')
    ])
  }
}

var templateView = function(ctrl, args, views) {
  return m('html', [
    m('head', [
      m('title', 'Mithril Demo')
    ]),
    m('body', [
      m.component(navigation),
      views.content,
      m('footer', 'Footer content'),
      m.trust('<script src="index.js"></script>')
    ])
  ])
}

var templateMixin = function(templateView, views) {
  return function(ctrl, args) {
    var renderedContent = {}
    Object.keys((views || {})).forEach(function(key) {
      renderedContent[key] = views[key](ctrl, args)
    })

    return templateView(ctrl, args, renderedContent)
  }
}

var pageTemplate = function(component) {
  return {
    controller: component.controller,
    view: templateMixin(templateView, {
      content: component.view
    })
  }
}

var pageHome = pageTemplate(homeComponent)
var pageAbout = pageTemplate(aboutComponent)

m.route.mode = 'hash'

m.route(document.querySelector('#mithril-demo'), '/', {
  '/': pageHome,
  '/:filter': pageHome,
  '/about': pageAbout
})
