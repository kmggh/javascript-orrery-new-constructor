// The new constructor for objects by Douglas Crockford.
// From the YUI Theater talk, Function the Ultimate - Act III.


function newConstructor(extend, initializer, methods) {
  'use strict';

  var func, prototype, key;

  prototype = Object.create(extend && extend.prototype);

  if (methods) {
    for (key in methods) {
      if (methods.hasOwnProperty(key)) {
        prototype[key] = methods[key];
      }
    }
  }

  func = function () {
    var that = Object.create(prototype);
    if (typeof initializer === 'function') {
      initializer.apply(that, arguments);
    }
    return that;
  };

  func.prototype = prototype;
  prototype.constructor = func;
  return func;
}

exports.newConstructor = newConstructor;
