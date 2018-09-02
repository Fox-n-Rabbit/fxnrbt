
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
        var arg = node.arguments[0];
        if (expression.isAssert(node)) {
            if (expression.argumentIsComparison(arg)) {
                context.report(node, 'using comparison instead of assert.equal / assert.strictEqual');
            } else 
            if (expression.argumentIsStrictComparison(arg)) {
                context.report(node, 'using strict comparison instead of assert.strictEqual');
            } else
            if (expression.argumentIsNegatedComparison(arg)) {
                context.report(node, 'using "not equal" comparison instead of assert.notEqual');
            } else if (expression.argumentIsNegatedStrictComparison(arg)) {
                context.report(node, 'using strict "not equal" comparison instead of assert.notStrictEqual');
            }
        } else if (expression.isAssertIsBoolean(node)) {
            if (expression.argumentIsComparison(arg)) {
                context.report(node, 'using comparison instead of assert.equal / assert.strictEqual');
            } else
            if (expression.argumentIsStrictComparison(arg)) {
                context.report(node, 'using strict comparison instead of assert.strictEqual');
            } else
            if (expression.argumentIsNegatedComparison(arg)) {
                context.report(node, 'using "not equal" comparison instead of assert.notEqual');
            } else if (expression.argumentIsNegatedStrictComparison(arg)) {
                context.report(node, 'using strict "not equal" comparison instead of assert.notStrictEqual');
            }
        }
    }
  };

};

module.exports.schema = [];

