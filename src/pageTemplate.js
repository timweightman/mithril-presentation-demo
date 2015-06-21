var templateView = require('./templateView')
var templateMixin = require('./templateMixin')

var pageTemplate = function(component) {
  return {
    controller: function(args) {
      m.redraw.strategy('diff');

      if (component.controller) {
        return component.controller(args)
      }
      return {}
    },
    view: templateMixin(templateView, {
      content: component.view
    })
  }
}

module.exports = pageTemplate
