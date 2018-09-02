'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var app = require('../../../index.js');
var rule = app.rules['assert-enforce-implicit-comparison'];

var RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run('assert-enforce-implicit-comparison', rule, {
  valid: [
    {
      code: 'assert.equal(whatever, whenever)'
    },
    {
      code: 'assert.strictEqual(whatever, whenever)'
    },
    {
      code: 'assert.noEqual(whatever, whenever)'
    }
  ],
  invalid: [
    {
      code: 'assert(whatever == whenever)',
      errors: [{
        message: 'using comparison instead of assert.equal / assert.strictEqual'
      }]
    },
    {
      code: 'assert(whatever === whenever)',
      errors: [{
        message: 'using strict comparison instead of assert.strictEqual'
      }]
    },
    {
      code: 'assert(whatever != whenever)',
      errors: [{
        message: 'using "not equal" comparison instead of assert.notEqual'
      }]
    },
    {
      code: 'assert(whatever !== whenever)',
      errors: [{
        message: 'using strict "not equal" comparison instead of assert.notStrictEqual'
      }]
    },
    {
      code: 'assert.isFalse(something == anything)',
      errors: [{
        message: 'using comparison instead of assert.equal / assert.strictEqual'
      }]
    },
    {
      code: 'assert.isTrue(something == anything)',
      errors: [{
        message: 'using comparison instead of assert.equal / assert.strictEqual'
      }]
    },
    {
      code: 'assert.isFalse(something === anything)',
      errors: [{
        message: 'using strict comparison instead of assert.strictEqual'
      }]
    },
    {
      code: 'assert.isTrue(something === anything)',
      errors: [{
        message: 'using strict comparison instead of assert.strictEqual'
      }]
    },
    {
      code: 'assert.isFalse(something != anything)',
      errors: [{
        message: 'using "not equal" comparison instead of assert.notEqual'
      }]
    },
    {
      code: 'assert.isTrue(something != anything)',
      errors: [{
        message: 'using "not equal" comparison instead of assert.notEqual'
      }]
    },
    {
      code: 'assert.isFalse(something !== anything)',
      errors: [{
        message: 'using strict "not equal" comparison instead of assert.notStrictEqual'
      }]
    },
    {
      code: 'assert.isTrue(something !== anything)',
      errors: [{
        message: 'using strict "not equal" comparison instead of assert.notStrictEqual'
      }]
    }
  ]
});

