var templateMixin = function(templateView, views) {
  return function(ctrl, args) {
    var renderedContent = {}
    Object.keys((views || {})).forEach(function(key) {
      renderedContent[key] = views[key](ctrl, args)
    })

    return templateView(ctrl, args, renderedContent)
  }
}

module.exports = templateMixin
