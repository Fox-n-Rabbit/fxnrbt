'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var app = require('../../../index.js');
var rule = app.rules['assert-enforce-boolean'];

var RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run('assert-enforce-boolean', rule, {
  valid: [
  {
    code: 'assert.isTrue(whatever)'
  },
  {
    code: 'assert.isFalse(whatever)'
  },
  {
    code: 'assert(something == 0)'
  },
  {
    code: 'assert(something == 1)'  
  }
],
  invalid: [
   {
      code: 'assert.equal("hey", true)',
      errors: [{
        message: 'using assert.equal with boolean argument (use just assert.isTrue / assert.isFalse instead)'
      }]
  },
  {
      code: 'assert.equal(true, "hey")',
      errors: [{
        message: 'using assert.equal with boolean argument (use just assert.isTrue / assert.isFalse instead)'
      }]
  },
  {
      code: 'assert.equal("hey", false)',
      errors: [{
        message: 'using assert.equal with boolean argument (use just assert.isTrue / assert.isFalse instead)'
      }]
  },
  {
      code: 'assert.equal(false, "hey")',
      errors: [{
        message: 'using assert.equal with boolean argument (use just assert.isTrue / assert.isFalse instead)'
      }]
  },
  {
    code: 'assert(something == true)',
    errors: [{
        message: 'comparing with boolean value instead instead of using assert.isTrue / assert.isFalse'
    }]
  },
  {
    code: 'assert(something === true)',
    errors: [{
        message: 'comparing with boolean value instead instead of using assert.isTrue / assert.isFalse'
    }]
  },
  {
    code: 'assert(something == false)',
    errors: [{
        message: 'comparing with boolean value instead instead of using assert.isTrue / assert.isFalse'
    }]
  }, 
  {
    code: 'assert(something === false)',
    errors: [{
        message: 'comparing with boolean value instead instead of using assert.isTrue / assert.isFalse'
    }]
  },
  {
    code: 'assert(false == something)',
    errors: [{
        message: 'comparing with boolean value instead instead of using assert.isTrue / assert.isFalse'
    }]
  },
  {
    code: 'assert(false === something)',
    errors: [{
        message: 'comparing with boolean value instead instead of using assert.isTrue / assert.isFalse'
    }]
  }, 
  {
    code: 'assert(true == something)',
    errors: [{
        message: 'comparing with boolean value instead instead of using assert.isTrue / assert.isFalse'
    }]
  },
  {
    code: 'assert(true === something)',
    errors: [{
        message: 'comparing with boolean value instead instead of using assert.isTrue / assert.isFalse'
    }]
  } 
]});

