'use strict';
var m = require('mithril');

require('./style.css');

var input = {
  view: function(ctrl, args) {
    var inputAttributes = args.input || {};

    return m('div', [
      m('label', args.label || ''),
      m('input', {
        oninput: m.withAttr('value', args.bind),
        value: args.bind(),
        name: inputAttributes.name || '',
        type: inputAttributes.type || 'text'
      })
    ]);
  }
};

// Most basic of all.
var homeComponent = {
  controller: function() {
    return {
      input: m.prop('Home')
    };
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
    ]);
  }
};

m.mount(document.querySelector('#mithril-demo'), homeComponent);
