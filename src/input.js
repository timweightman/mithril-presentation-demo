var input = {
  view: function(ctrl, args) {
    var inputAttributes = args.input || {}

    return m('div', [
      m('label', args.label || ''),
      m('input', {
        oninput: m.withAttr('value', args.bind),
        value: args.bind(),
        name: inputAttributes.name || '',
        type: inputAttributes.type || 'text'
      })
    ])
  }
}

module.exports = input
