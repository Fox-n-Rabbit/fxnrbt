
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
        if (expression.isAssertEqual(node)) {
            if (expression.argumentIsBoolean(node.arguments[1]) || expression.argumentIsBoolean(node.arguments[0])) {
                context.report(node, 'using assert.equal with boolean argument (use just assert.isTrue / assert.isFalse instead)')
            }
        } else if (expression.isAssert(node)) {
            if (expression.argumentIsAnyComparison(node.arguments[0])) {
                if (expression.isRightBoolean(node.arguments[0]) || expression.isLeftBoolean(node.arguments[0])) {
                    context.report(node, 'comparing with boolean value instead instead of using assert.isTrue / assert.isFalse')
                }
            }
        }
    }
  };

};

module.exports.schema = [];

