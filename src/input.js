var input = {
  view: function(ctrl, args) {
    var inputAttributes = args.input || {}

    return m('div', [
      m('label', args.label || ''),
      m('input', inputAttributes)
    ])
  }
}

module.exports = input
