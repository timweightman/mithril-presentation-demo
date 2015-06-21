var navLink = require('./navLink')

var navigation = {
  view: function() {
    var search = m.route.param('search') || ''
    if (search) {
      search = '&' + m.route.buildQueryString({search: search})
    }
    
    return m('div', [
      m.component(navLink, {classes: 'nav-link', href: '/?type=movie' + search, content: 'Movies'}),
      m.component(navLink, {classes: 'nav-link', href: '/?type=series' + search, content: 'Series'}),
      m.component(navLink, {classes: 'nav-link', href: '/about', content: 'About'})
    ])
  }
}

module.exports = navigation
