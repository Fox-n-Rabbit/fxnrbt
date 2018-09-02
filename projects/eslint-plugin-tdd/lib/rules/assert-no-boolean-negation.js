
/**
 * @fileoverview Prevent usage of assert.equal(var, true) and assert.equal(something, false);
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

var expression = require('../expression');

module.exports = function(context) {

  // --------------------------------------------------------------------------
  // Public
  // --------------------------------------------------------------------------

  return {
    CallExpression: function(node) {
      if (expression.isAssertIsBoolean(node)) {
        if (expression.isBooleanNegation(node.arguments[0])) {
          context.report(node, 'passing inversed boolean argument to assert.isTrue or assert.isFalse');
        }
      } else
      if (expression.isAssert(node)) {
        if (expression.isBooleanNegation(node.arguments[0])) {
          context.report(node, 'passing inversed boolean argument to assert, use assert.isFalse(expression) instead');
        }
      }
    }
  };

};

module.exports.schema = [];

