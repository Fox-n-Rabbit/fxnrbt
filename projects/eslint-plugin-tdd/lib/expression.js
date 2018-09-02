'use strict';


var Expression = function() {};

Expression.prototype.isStandardAssertion = function(name, node) {
  var callee = node.callee;

  if (!callee) {
    return false;
  }

  if (callee.type !== 'MemberExpression') {
    return false;
  }

  var object = callee.object;

  if (object.name !== 'assert') {
    return false;
  }

  if (callee.property.name !== name) {
    return false;
  }

  return true;
};

Expression.prototype.isAssertEqual = function(node) {
  return this.isStandardAssertion('equal', node);
};

Expression.prototype.isAssertStrictEqual = function(node) {
  return this.isStandardAssertion('strictEqual', node);
};

Expression.prototype.isAssertIsTrue = function(node) {
  return this.isStandardAssertion('isTrue', node);
};

Expression.prototype.isAssertIsFalse = function(node) {
  return this.isStandardAssertion('isFalse', node);
};

Expression.prototype.isAssertOperator = function(node) {
  return this.isStandardAssertion('operator', node);
};

Expression.prototype.isAssert = function(node) {
  var callee = node.callee;

  if (!callee) {
    return false;
  }

  if (callee.type !== 'Identifier') {
    return false;
  }

  if (callee.name !== 'assert') {
    return false;
  }

  return true;
};

Expression.prototype.argumentIsTrue = function(arg) {
  return arg.value === true;
};

Expression.prototype.argumentIsFalse = function(arg) {
  return arg.value === false;
};

Expression.prototype.argumentIsBoolean = function(arg) {
  return this.argumentIsFalse(arg) || this.argumentIsTrue(arg);
};


Expression.prototype.argumentIsComparison = function(arg) {
  return (arg.type == 'BinaryExpression') && (arg.operator == '==');
};

Expression.prototype.argumentIsStrictComparison = function(arg) {
  return (arg.type == 'BinaryExpression') && (arg.operator == '===');
};

Expression.prototype.argumentIsTypeof = function(arg) {
  return (arg.type == 'UnaryExpression') && (arg.operator == 'typeof');
};

Expression.prototype.argumentIsAboveComparison = function(arg) {
  return (arg.type == 'BinaryExpression') && (arg.operator == '>');
};

Expression.prototype.argumentIsAboveOrEqualComparison = function(arg) {
  return (arg.type == 'BinaryExpression') && (arg.operator == '>=');
};


Expression.prototype.argumentIsBelowComparison = function(arg) {
  return (arg.type == 'BinaryExpression') && (arg.operator == '<');
};

Expression.prototype.argumentIsBelowOrEqualComparison = function(arg) {
  return (arg.type == 'BinaryExpression') && (arg.operator == '<=');
};


Expression.prototype.argumentIsAnyComparison = function(arg) {
  return this.argumentIsComparison(arg) || this.argumentIsStrictComparison(arg);
};

Expression.prototype.argumentIsNegatedComparison = function(arg) {
  return (arg.type == 'BinaryExpression') && (arg.operator == '!=');
};

Expression.prototype.argumentIsNegatedStrictComparison = function(arg) {
  return (arg.type == 'BinaryExpression') && (arg.operator == '!==');
};

Expression.prototype.isLiteral = function(node) {
  return node.type === 'Literal';
};

Expression.prototype.isLiteralValue = function(node, value) {
  return this.isLiteral(node) && node.value === value;
};



Expression.prototype.isAssertIsBoolean = function(node) {
  return this.isAssertIsFalse(node) || this.isAssertIsTrue(node);
};

Expression.prototype.isBooleanNegation = function(expression) {
  return (expression.type == 'UnaryExpression') && (expression.operator == '!');
};


Expression.prototype.isRightTrue = function(expression) {
   if (this.isLiteral(expression.right)) {
    return expression.right.value === true;
   }

   return false;
};

Expression.prototype.isLeftTrue = function(expression) {
   if (this.isLiteral(expression.left)) {
    return expression.left.value === true;
   }

   return false;
};

Expression.prototype.isLeftFalse = function(expression) {
   if (this.isLiteral(expression.left)) {
    return expression.left.value === false;
   }

   return false;
};

Expression.prototype.isRightFalse = function(expression) {
   if (this.isLiteral(expression.right)) {
    return expression.right.value === false;
   }

   return false;
};


Expression.prototype.isRightBoolean = function(expression) {
  return this.isRightFalse(expression) || this.isRightTrue(expression);
};

Expression.prototype.isLeftBoolean = function(expression) {
  return this.isLeftFalse(expression) || this.isLeftTrue(expression);
};


module.exports = new Expression();
