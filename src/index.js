'use strict'
var m = require('mithril')

require('./style.css')
//6. OMDB API search
//5. Split code across files
//4. Page template and mixin
//3. Routing with filter param
//2. Configurable input component
//1. Basic input component
var homeComponent = {
  controller: function() {
    return {
      input: m.prop('Home')
    }
  },
  view: function(ctrl) {
    return m('div', [
      m('input', {oninput: m.withAttr('value', ctrl.input), value: ctrl.input()}),
      m('h1', ctrl.input())
    ])
  }
}

m.mount(document.querySelector('#mithril-demo'), homeComponent)
