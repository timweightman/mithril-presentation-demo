'use strict';

function homeController(args) {
  return {
    title: m.prop('Home')
  };
};

function homeView(ctrl) {
  return m('div.home', [
    m('h1', ctrl.title())
  ]);
};

module.exports = {
  controller: homeController,
  view: homeView
};
