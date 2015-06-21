var input = require('./input')
var api = require('./omdb')

var homeComponent = {
  controller: function() {
    var state = {}
    state.type = m.route.param('type') || ''
    state.search = m.route.param('search') || ''
    state.results = []

    if (state.type && state.search) {
      api.search(state.type, state.search).then(function(results) {
        state.results = results
      }).then(m.redraw)
    }

    return {
      state: state,
      update: function(e) {
        state[e.target.name] = e.target.value

        m.route('/', {
          type: state.type,
          search: state.search
        })
      }
    }
  },
  view: function(ctrl) {
    return m('div', {onchange: ctrl.update}, [
      m.component(input, {
        label: ctrl.state.type,
        input: {
          value: ctrl.state.search,
          name: 'search'
        }
      }),
      m('ul', ctrl.state.results.map(function(result) {
        return m('li', [
          result.Title + ' (' + result.Year + ')'
        ])
      }))
    ])
  }
}

module.exports = homeComponent
