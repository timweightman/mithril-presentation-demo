var navLink = require('./navLink')

var navigation = {
  view: function() {
    return m('div', [
      m.component(navLink, {classes: 'nav-link', href: '/', content: 'Home'}),
      m.component(navLink, {classes: 'nav-link', href: '/completed', content: 'Completed'}),
      m.component(navLink, {classes: 'nav-link', href: '/about', content: 'About'})
    ])
  }
}

module.exports = navigation
