'use strict';

// Generates all the views using the given controller.
function generateViews(viewFunctions, ctrl, args) {
  var views = {};
  // map each viewFunction key, executing the function to give us
  // the actual result content of the view, using ctrl and args.
  Object.keys(viewFunctions).forEach(function(key) {
    views[key] = viewFunctions[key](ctrl, args);
  });

  return views;
}

// Mixes a layout template function with (n) view arguments.
function mixinLayout(layout, viewFunctions) {
  // Collect all the view functions, skip the first (layout) parameter
  return function(ctrl, args) {
    var views = generateViews(viewFunctions, ctrl, args);

    // Call the layout with ctrl, args and all the generated views
    return layout(ctrl, args, views);
  };
}

module.exports = mixinLayout;
