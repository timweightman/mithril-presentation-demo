var navigation = require('./navigation')

var templateView = function(ctrl, args, views) {
  return m('html', [
    m('head', [
      m('title', 'Mithril Demo'),
      m('link', {rel: 'stylesheet', type: 'text/css', href: 'style.css' })
    ]),
    m('body', [
      m.component(navigation),
      views.content,
      m('footer', 'Footer content'),
      m.trust('<script src="index.js"></script>')
    ])
  ])
}

module.exports = templateView
