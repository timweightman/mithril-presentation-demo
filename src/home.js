var input = require('./input')

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

module.exports = homeComponent
