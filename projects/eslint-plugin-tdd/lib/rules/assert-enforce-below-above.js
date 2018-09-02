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
      var arg = node.arguments[0];
      if (expression.isAssertIsFalse(node)) {
        if (expression.argumentIsBelowOrEqualComparison(arg)) {
          context.report(node, 'instead of assert.isFalse(a <= b) use assert.isAbove(a, b)');
        } else if (expression.argumentIsAboveOrEqualComparison(arg)) {
          context.report(node, 'instead of assert.isFalse(a >= b) use assert.isBelow(a, b)');
        }
      } else if (expression.isAssertIsTrue(node)) {
        if (expression.argumentIsAboveComparison(arg)) {
          context.report(node, 'instead of  assert.isTrue(a > b) use assert.isAbove(a, b)');
        } else if (expression.argumentIsBelowComparison(arg)) {
          context.report(node, 'instead of using assert.isTrue(a < b) use assert.isBelow(a, b)');
        }
      } else if (expression.isAssert(node)) {
        if (expression.argumentIsAboveComparison(arg)) {
          context.report(node, 'instead of  assert(a > b) use assert.isAbove(a, b)');
        } else if (expression.argumentIsBelowComparison(arg)) {
          context.report(node, 'instead of using assert(a < b) use assert.isBelow(a, b)');
        }
      }
    }
  };

};

module.exports.schema = [];

