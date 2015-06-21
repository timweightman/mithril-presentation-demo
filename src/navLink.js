var navLink = {
  view: function(ctrl, args) {
    if (m.route() === args.href) {
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

module.exports = navLink
