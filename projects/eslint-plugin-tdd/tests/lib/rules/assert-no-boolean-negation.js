'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var app = require('../../../index.js');
var rule = app.rules['assert-no-boolean-negation'];

var RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run('assert-no-boolean-negate', rule, {
  valid: [
    {
      code: 'assert.isFalse(val)'
    },
    {
      code: 'assert.isTrue(val)'
    },
    {
      code: 'assert.isFalse(callback())'
    },
    {
      code: 'assert.isTrue(callback())'
    }
  ],
  invalid: [
    {
      code: 'assert.isFalse(!val)',
      errors: [{
        message: 'passing inversed boolean argument to assert.isTrue or assert.isFalse'
      }]
    },
    {
      code: 'assert.isTrue(!val)',
      errors: [{
        message: 'passing inversed boolean argument to assert.isTrue or assert.isFalse'
      }]
    },
    {
      code: 'assert.isFalse(!func())',
      errors: [{
        message: 'passing inversed boolean argument to assert.isTrue or assert.isFalse'
      }]
    },
    {
      code: 'assert.isTrue(!func())',
      errors: [{
        message: 'passing inversed boolean argument to assert.isTrue or assert.isFalse'
      }]
    },
    {
      code: 'assert(!expression)',
      errors: [{
        message: 'passing inversed boolean argument to assert, use assert.isFalse(expression) instead'
      }]
    },
    {
      code: 'assert(!func())',
      errors: [{
        message: 'passing inversed boolean argument to assert, use assert.isFalse(expression) instead'
      }]
    }

  ]});

