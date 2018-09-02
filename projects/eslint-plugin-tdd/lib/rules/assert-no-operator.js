'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

var expression = require('../expression');

module.exports = function (context) {

  // --------------------------------------------------------------------------
  // Public
  // --------------------------------------------------------------------------

  return {
    CallExpression: function (node) {
      if (expression.isAssertOperator(node)) {
        var operator = node.arguments[1].value;
        var messageResolution = {
          '==': 'assert.equal(a, b) (or, even better, assert.strictEqual(a, b))',
          '===': 'assert.strictEqual(a, b))',
          '>': 'assert.isAbove(a, b))',
          '<': 'assert.isBelow(a, b))',
          '<=': 'assert.isAtMost(a, b))',
          '>=': 'assert.isAtLeast(a, b))',
          '!=': 'assert.notEqual(a, b)) (or, even better, assert.notStrictEqual(a, b))',
          '!==': 'assert.notStrictEqual(a, b)'
        };

        if (messageResolution.hasOwnProperty(operator)) {
          var message = 'instead of assert.operator(a, "' + operator + '", b) use ' + messageResolution[operator];
          context.report(node, message);
        }
      }
    }
  };

};

module.exports.schema = [];

