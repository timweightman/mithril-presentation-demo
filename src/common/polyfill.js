var polyfillUrl = 'http://cdn.polyfill.io/v1/polyfill.min.js?features=';
var polyfillsForMithril = [
  'Array.prototype.indexOf',
  'Array.prototype.forEach',
  'Function.prototype.bind',
  'Object.keys',
  'JSON'
];

var polyfillFeatures = [
  'Array.prototype.slice'
].concat(polyfillsForMithril);

function polyfillView() {
  return m('script', {
    src: polyfillUrl + polyfillFeatures.join(',')
  });
};

module.exports = {
  view: polyfillView
};
