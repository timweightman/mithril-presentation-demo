'use strict'
var m = require('mithril')

require('./style.css')

var pageTemplate = require('./pageTemplate')
var homeComponent = require('./home')
var aboutComponent = require('./about')

var pageHome = pageTemplate(homeComponent)
var pageAbout = pageTemplate(aboutComponent)

m.route.mode = 'hash'

m.route(document, '/', {
  '/': pageHome,
  '/:filter': pageHome,
  '/about': pageAbout
})
