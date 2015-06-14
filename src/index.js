'use strict';
var m = require('mithril');

require('./style.css');

// Most basic of all.
var homeComponent = {
  controller: function() {
    return {
      input: m.prop('Home')
    };
  },
  view: function(ctrl) {
    return m('div', [
      m('input', {oninput: m.withAttr('value', ctrl.input), value: ctrl.input()}),
      m('h1', ctrl.input())
    ]);
  }
};

m.mount(document.querySelector('#mithril-demo'), homeComponent);
