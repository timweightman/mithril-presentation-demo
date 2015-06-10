'use strict';

function navigationController(args) {
  return {};
}

function navigationView(ctrl, args) {
  return m('span', 'Navigation View');
}

module.exports = {
  controller: navigationController,
  view: navigationView
};
