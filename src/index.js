'use strict'
var m = require('mithril')

require('./style.css')

// TODO Media Search component, will manage our
// model and delegate to specialised sub-
// components
var MediaSearch = {
  controller: function() {
    var ctrl = {}
    var media = require('./media')

    ctrl.criteria = m.prop({
      type: m.prop(m.route.param('type') || 'movie'),
      search: m.prop(m.route.param('search') || '')
    })

    ctrl.mediaList = m.prop([])

    ctrl.isCriteriaValid = function() {
      return ((ctrl.criteria().type() === 'movie' ||
              ctrl.criteria().type() === 'series') &&
              ctrl.criteria().search().length > 1)
    }

    ctrl.update = function() {
      if (ctrl.isCriteriaValid()) {
        media.search(ctrl.criteria().type(), ctrl.criteria().search())
          .then(ctrl.mediaList)
          .then(m.redraw)
      }
    }

    return ctrl;
  },
  view: function(ctrl, args) {
    return m('div', [
      m.component(MediaSearchForm, {update: ctrl.update, criteria: ctrl.criteria}),
      m.component(MediaList, {mediaList: ctrl.mediaList})
    ])
  }
}

// TODO Media Search Form component, will take
// user input and trigger relevant events
var MediaSearchForm = {
  view: function(ctrl, args) {
    return m('div', {onchange: args.update}, [
      m('select', {
        oninput: m.withAttr('value', args.criteria().type),
        value: args.criteria().type()
      }, [
        m('option', {value: 'movie'}, 'Movie'),
        m('option', {value: 'series'}, 'Series')
      ]),
      m('input', {
        oninput: m.withAttr('value', args.criteria().search),
        value: args.criteria().search()
      })
    ])
  }
}

// TODO Media List component, will display and
// list of media items
var MediaList = {
  view: function(ctrl, args) {
    return m('ul', args.mediaList().map(function(mediaItem) {
      return m('li', [
        m('a', {
          href: 'http://imdb.com/title/' + mediaItem.imdbId(),
          target: '_blank'
        }, mediaItem.toString())
      ])
    }))
  }
}

// TODO: route mode and routing paths
m.route.mode = 'hash'

m.route(document.body, '/', {
  '/': MediaSearch,
  '/:type/:search': MediaSearch
})
