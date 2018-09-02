'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

var expression = require('../expression');

var createMessage = function(assertionBody, expectedTypeOf) {
  var knownTypes = {
    'string': 'isString',
    'object': 'isObject',
    'number': 'isNumber',
    'boolean': 'isBoolean',
    'function': 'isFunction',
    'undefined': 'isUndefined'
  };

  if (knownTypes.hasOwnProperty(expectedTypeOf)) {
    return ['instead of ', assertionBody, ' use assert.', knownTypes[expectedTypeOf], '(a);'].join('');
  }
};

var findTypeofComparison = function(typeofPart, valuePart) {
  if (expression.argumentIsTypeof(typeofPart)) {
    return [
      'number',
      'string',
      'object',
      'boolean',
      'function',
      'undefined'
    ].find(function(val) {
      return expression.isLiteralValue(valuePart, val);
    });
  }
};



module.exports = function (context) {

  // --------------------------------------------------------------------------
  // Public
  // --------------------------------------------------------------------------

  return {
    CallExpression: function (node) {
      var firstExpression;
      var secondExpression;

      var assertionDescription;
      var assertionSeparator;
      if (expression.isAssert(node)) {
        assertionDescription = 'assert';
      } else if (expression.isAssertIsTrue(node)) {
        assertionDescription = 'assert.isTrue';
      } else if (expression.isAssertEqual(node)) {
        assertionDescription = 'assert.equal';
      } else if (expression.isAssertStrictEqual(node)) {
        assertionDescription = 'assert.strictEqual';
      }

      if (assertionDescription == 'assert' || assertionDescription == 'assert.isTrue') {
        var assertionArg = node.arguments[0];
        if (expression.argumentIsComparison(assertionArg)) {
          assertionSeparator = ' == ';
        } else if (expression.argumentIsStrictComparison(assertionArg)) {
          assertionSeparator = ' === ';
        }
        if (assertionSeparator) {
          firstExpression = assertionArg.left;
          secondExpression = assertionArg.right;
        }
      } else if (assertionDescription == 'assert.equal' || assertionDescription == 'assert.strictEqual') {
        assertionSeparator = ', ';
        firstExpression = node.arguments[0];
        secondExpression = node.arguments[1];
      }

      if (firstExpression && secondExpression) {
        var assertionBody;
        var typeofExpressionKind = findTypeofComparison(firstExpression, secondExpression);
        if (typeofExpressionKind) {
          assertionBody = [assertionDescription + '(typeof a', '"' + typeofExpressionKind + '")'].join(assertionSeparator);
          context.report(node, createMessage(assertionBody, typeofExpressionKind));
        } else {
          var typeofExpressionKindReversed =   findTypeofComparison(secondExpression, firstExpression);
          if (typeofExpressionKindReversed) {
            assertionBody = [assertionDescription + '("' + typeofExpressionKindReversed + '"', 'typeof a)'].join(assertionSeparator);
            context.report(node, createMessage(assertionBody, typeofExpressionKindReversed));
          }
        }

      }


    }
  };

};

module.exports.schema = [];

