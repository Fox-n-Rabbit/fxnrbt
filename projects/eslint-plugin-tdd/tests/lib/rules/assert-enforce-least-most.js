'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var app = require('../../../index.js');
var rule = app.rules['assert-enforce-least-most'];

var RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run('assert-enforce-least-most', rule, {
    valid: [
        {
            code: 'assert.isFalse(a <= b)'
        },
        {
            code: 'assert.isFalse(a >= b)'
        },
        {
            code: 'assert.isTrue(a < b)'
        },
        {
            code: 'assert.isTrue(a > b)'
        },
        {
            code: 'assert(a < b)'
        },
        {
            code: 'assert(a > b)'
        }
    ],
    invalid: [
        {
            code: 'assert.isFalse(a < b)',
            errors: [{
                message: 'instead of assert.isFalse(a < b) use assert.isAtLeast(a, b)'
            }]
        },
        {
            code: 'assert.isFalse(a > b)',
            errors: [{
                message: 'instead of assert.isFalse(a > b) use assert.isAtMost(a, b)'
            }]
        },
        {
            code: 'assert.isTrue(a <= b)',
            errors: [{
                message: 'instead of assert.isTrue(a <= b) use assert.isAtMost(a, b)'
            }]
        },
        {
            code: 'assert.isTrue(a >= b)',
            errors: [{
                message: 'instead of using assert.isTrue(a >= b) use assert.isAtLeast(a, b)'
            }]
        },
        {
            code: 'assert(a <= b)',
            errors: [{
                message: 'instead of using assert(a <= b) use assert.isAtMost(a, b)'
            }]
        },
        {
            code: 'assert(a >= b)',
            errors: [{
                message: 'instead of using assert(a >= b) use assert.isAtLeast(a, b)'
            }]
        }
    ]});

