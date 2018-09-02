'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var app = require('../../../index.js');
var rule = app.rules['assert-no-operator'];

var RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run('assert-no-operator', rule, {
  valid: [
    {
      code: 'assert.operator(a, "**", b)'
    },
    {
      code: 'assert(whatever)'
    }
  ],
  invalid: [
    {
      code: 'assert.operator(a, "==", b)',
      errors: [{
        message: 'instead of assert.operator(a, "==", b) use assert.equal(a, b) (or, even better, assert.strictEqual(a, b))'
      }]
    },
    {
      code: 'assert.operator(a, "===", b)',
      errors: [{
        message: 'instead of assert.operator(a, "===", b) use assert.strictEqual(a, b))'
      }]
    },
    {
      code: 'assert.operator(a, "<", b)',
      errors: [{
        message: 'instead of assert.operator(a, "<", b) use assert.isBelow(a, b))'
      }]
    },
    {
      code: 'assert.operator(a, ">", b)',
      errors: [{
        message: 'instead of assert.operator(a, ">", b) use assert.isAbove(a, b))'
      }]
    },
    {
      code: 'assert.operator(a, "<=", b)',
      errors: [{
        message: 'instead of assert.operator(a, "<=", b) use assert.isAtMost(a, b))'
      }]
    },
    {
      code: 'assert.operator(a, ">=", b)',
      errors: [{
        message: 'instead of assert.operator(a, ">=", b) use assert.isAtLeast(a, b))'
      }]
    },
    {
      code: 'assert.operator(a, "!=", b)',
      errors: [{
        message: 'instead of assert.operator(a, "!=", b) use assert.notEqual(a, b)) (or, even better, assert.notStrictEqual(a, b))'
      }]
    },
    {
      code: 'assert.operator(a, "!==", b)',
      errors: [{
        message: 'instead of assert.operator(a, "!==", b) use assert.notStrictEqual(a, b)'
      }]
    }
  ]
});

