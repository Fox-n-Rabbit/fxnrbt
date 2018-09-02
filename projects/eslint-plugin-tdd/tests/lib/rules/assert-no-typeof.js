'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var app = require('../../../index.js');
var rule = app.rules['assert-no-typeof'];

var RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run('assert-no-typeof', rule, {
  valid: [
    {
      code: 'assert(typeof a == "unknown")'
    },
    {
      code: 'assert("unknown" == typeof a)'
    },
    {
      code: 'assert(typeof a > "number")'
    }
  ],
  invalid: [
    {
      code: 'assert(typeof a == "boolean")',
      errors: [{
        message: 'instead of assert(typeof a == "boolean") use assert.isBoolean(a);'
      }]
    },
    {
      code: 'assert(typeof a == "string")',
      errors: [{
        message: 'instead of assert(typeof a == "string") use assert.isString(a);'
      }]
    },
    {
      code: 'assert(typeof a == "number")',
      errors: [{
        message: 'instead of assert(typeof a == "number") use assert.isNumber(a);'
      }]
    },
    {
      code: 'assert(typeof a == "object")',
      errors: [{
        message: 'instead of assert(typeof a == "object") use assert.isObject(a);'
      }]
    },
    {
      code: 'assert(typeof a == "function")',
      errors: [{
        message: 'instead of assert(typeof a == "function") use assert.isFunction(a);'
      }]
    },
    {
      code: 'assert(typeof a == "undefined")',
      errors: [{
        message: 'instead of assert(typeof a == "undefined") use assert.isUndefined(a);'
      }]
    },
    {
      code: 'assert("boolean" == typeof a)',
      errors: [{
        message: 'instead of assert("boolean" == typeof a) use assert.isBoolean(a);'
      }]
    },
    {
      code: 'assert("string" == typeof a)',
      errors: [{
        message: 'instead of assert("string" == typeof a) use assert.isString(a);'
      }]
    },
    {
      code: 'assert("number" == typeof a)',
      errors: [{
        message: 'instead of assert("number" == typeof a) use assert.isNumber(a);'
      }]
    },
    {
      code: 'assert("object" == typeof a)',
      errors: [{
        message: 'instead of assert("object" == typeof a) use assert.isObject(a);'
      }]
    },
    {
      code: 'assert("function" == typeof a)',
      errors: [{
        message: 'instead of assert("function" == typeof a) use assert.isFunction(a);'
      }]
    },
    {
      code: 'assert("undefined" == typeof a)',
      errors: [{
        message: 'instead of assert("undefined" == typeof a) use assert.isUndefined(a);'
      }]
    },

    {
      code: 'assert(typeof a === "boolean")',
      errors: [{
        message: 'instead of assert(typeof a === "boolean") use assert.isBoolean(a);'
      }]
    },
    {
      code: 'assert(typeof a === "string")',
      errors: [{
        message: 'instead of assert(typeof a === "string") use assert.isString(a);'
      }]
    },
    {
      code: 'assert(typeof a === "number")',
      errors: [{
        message: 'instead of assert(typeof a === "number") use assert.isNumber(a);'
      }]
    },
    {
      code: 'assert(typeof a === "object")',
      errors: [{
        message: 'instead of assert(typeof a === "object") use assert.isObject(a);'
      }]
    },
    {
      code: 'assert(typeof a === "function")',
      errors: [{
        message: 'instead of assert(typeof a === "function") use assert.isFunction(a);'
      }]
    },
    {
      code: 'assert(typeof a === "undefined")',
      errors: [{
        message: 'instead of assert(typeof a === "undefined") use assert.isUndefined(a);'
      }]
    },
    {
      code: 'assert("boolean" === typeof a)',
      errors: [{
        message: 'instead of assert("boolean" === typeof a) use assert.isBoolean(a);'
      }]
    },
    {
      code: 'assert("string" === typeof a)',
      errors: [{
        message: 'instead of assert("string" === typeof a) use assert.isString(a);'
      }]
    },
    {
      code: 'assert("number" === typeof a)',
      errors: [{
        message: 'instead of assert("number" === typeof a) use assert.isNumber(a);'
      }]
    },
    {
      code: 'assert("object" === typeof a)',
      errors: [{
        message: 'instead of assert("object" === typeof a) use assert.isObject(a);'
      }]
    },
    {
      code: 'assert("function" === typeof a)',
      errors: [{
        message: 'instead of assert("function" === typeof a) use assert.isFunction(a);'
      }]
    },
    {
      code: 'assert("undefined" === typeof a)',
      errors: [{
        message: 'instead of assert("undefined" === typeof a) use assert.isUndefined(a);'
      }]
    },

    {
      code: 'assert.isTrue(typeof a == "boolean")',
      errors: [{
        message: 'instead of assert.isTrue(typeof a == "boolean") use assert.isBoolean(a);'
      }]
    },
    {
      code: 'assert.isTrue(typeof a == "string")',
      errors: [{
        message: 'instead of assert.isTrue(typeof a == "string") use assert.isString(a);'
      }]
    },
    {
      code: 'assert.isTrue(typeof a == "number")',
      errors: [{
        message: 'instead of assert.isTrue(typeof a == "number") use assert.isNumber(a);'
      }]
    },
    {
      code: 'assert.isTrue(typeof a == "object")',
      errors: [{
        message: 'instead of assert.isTrue(typeof a == "object") use assert.isObject(a);'
      }]
    },
    {
      code: 'assert.isTrue(typeof a == "function")',
      errors: [{
        message: 'instead of assert.isTrue(typeof a == "function") use assert.isFunction(a);'
      }]
    },
    {
      code: 'assert.isTrue(typeof a == "undefined")',
      errors: [{
        message: 'instead of assert.isTrue(typeof a == "undefined") use assert.isUndefined(a);'
      }]
    },
    {
      code: 'assert.isTrue("boolean" == typeof a)',
      errors: [{
        message: 'instead of assert.isTrue("boolean" == typeof a) use assert.isBoolean(a);'
      }]
    },
    {
      code: 'assert.isTrue("string" == typeof a)',
      errors: [{
        message: 'instead of assert.isTrue("string" == typeof a) use assert.isString(a);'
      }]
    },
    {
      code: 'assert.isTrue("number" == typeof a)',
      errors: [{
        message: 'instead of assert.isTrue("number" == typeof a) use assert.isNumber(a);'
      }]
    },
    {
      code: 'assert.isTrue("object" == typeof a)',
      errors: [{
        message: 'instead of assert.isTrue("object" == typeof a) use assert.isObject(a);'
      }]
    },
    {
      code: 'assert.isTrue("function" == typeof a)',
      errors: [{
        message: 'instead of assert.isTrue("function" == typeof a) use assert.isFunction(a);'
      }]
    },
    {
      code: 'assert.isTrue("undefined" == typeof a)',
      errors: [{
        message: 'instead of assert.isTrue("undefined" == typeof a) use assert.isUndefined(a);'
      }]
    },

    {
      code: 'assert.isTrue(typeof a === "boolean")',
      errors: [{
        message: 'instead of assert.isTrue(typeof a === "boolean") use assert.isBoolean(a);'
      }]
    },
    {
      code: 'assert.isTrue(typeof a === "string")',
      errors: [{
        message: 'instead of assert.isTrue(typeof a === "string") use assert.isString(a);'
      }]
    },
    {
      code: 'assert.isTrue(typeof a === "number")',
      errors: [{
        message: 'instead of assert.isTrue(typeof a === "number") use assert.isNumber(a);'
      }]
    },
    {
      code: 'assert.isTrue(typeof a === "object")',
      errors: [{
        message: 'instead of assert.isTrue(typeof a === "object") use assert.isObject(a);'
      }]
    },
    {
      code: 'assert.isTrue(typeof a === "function")',
      errors: [{
        message: 'instead of assert.isTrue(typeof a === "function") use assert.isFunction(a);'
      }]
    },
    {
      code: 'assert.isTrue(typeof a === "undefined")',
      errors: [{
        message: 'instead of assert.isTrue(typeof a === "undefined") use assert.isUndefined(a);'
      }]
    },
    {
      code: 'assert.isTrue("boolean" === typeof a)',
      errors: [{
        message: 'instead of assert.isTrue("boolean" === typeof a) use assert.isBoolean(a);'
      }]
    },
    {
      code: 'assert.isTrue("string" === typeof a)',
      errors: [{
        message: 'instead of assert.isTrue("string" === typeof a) use assert.isString(a);'
      }]
    },
    {
      code: 'assert.isTrue("number" === typeof a)',
      errors: [{
        message: 'instead of assert.isTrue("number" === typeof a) use assert.isNumber(a);'
      }]
    },
    {
      code: 'assert.isTrue("object" === typeof a)',
      errors: [{
        message: 'instead of assert.isTrue("object" === typeof a) use assert.isObject(a);'
      }]
    },
    {
      code: 'assert.isTrue("function" === typeof a)',
      errors: [{
        message: 'instead of assert.isTrue("function" === typeof a) use assert.isFunction(a);'
      }]
    },
    {
      code: 'assert.isTrue("undefined" === typeof a)',
      errors: [{
        message: 'instead of assert.isTrue("undefined" === typeof a) use assert.isUndefined(a);'
      }]
    },
    {
      code: 'assert.equal(typeof a, "string")',
      errors: [{
        message: 'instead of assert.equal(typeof a, "string") use assert.isString(a);'
      }]
    },
    {
      code: 'assert.equal(typeof a, "number")',
      errors: [{
        message: 'instead of assert.equal(typeof a, "number") use assert.isNumber(a);'
      }]
    },
    {
      code: 'assert.equal(typeof a, "object")',
      errors: [{
        message: 'instead of assert.equal(typeof a, "object") use assert.isObject(a);'
      }]
    },
    {
      code: 'assert.equal(typeof a, "boolean")',
      errors: [{
        message: 'instead of assert.equal(typeof a, "boolean") use assert.isBoolean(a);'
      }]
    },
    {
      code: 'assert.equal(typeof a, "function")',
      errors: [{
        message: 'instead of assert.equal(typeof a, "function") use assert.isFunction(a);'
      }]
    },
    {
      code: 'assert.equal(typeof a, "undefined")',
      errors: [{
        message: 'instead of assert.equal(typeof a, "undefined") use assert.isUndefined(a);'
      }]
    },
    {
      code: 'assert.equal("string", typeof a)',
      errors: [{
        message: 'instead of assert.equal("string", typeof a) use assert.isString(a);'
      }]
    },
    {
      code: 'assert.equal("number", typeof a)',
      errors: [{
        message: 'instead of assert.equal("number", typeof a) use assert.isNumber(a);'
      }]
    },
    {
      code: 'assert.equal("object", typeof a)',
      errors: [{
        message: 'instead of assert.equal("object", typeof a) use assert.isObject(a);'
      }]
    },
    {
      code: 'assert.equal("boolean", typeof a)',
      errors: [{
        message: 'instead of assert.equal("boolean", typeof a) use assert.isBoolean(a);'
      }]
    },
    {
      code: 'assert.equal("function", typeof a)',
      errors: [{
        message: 'instead of assert.equal("function", typeof a) use assert.isFunction(a);'
      }]
    },
    {
      code: 'assert.equal("undefined", typeof a)',
      errors: [{
        message: 'instead of assert.equal("undefined", typeof a) use assert.isUndefined(a);'
      }]
    },
    {
      code: 'assert.strictEqual(typeof a, "string")',
      errors: [{
        message: 'instead of assert.strictEqual(typeof a, "string") use assert.isString(a);'
      }]
    },
    {
      code: 'assert.strictEqual(typeof a, "number")',
      errors: [{
        message: 'instead of assert.strictEqual(typeof a, "number") use assert.isNumber(a);'
      }]
    },
    {
      code: 'assert.strictEqual(typeof a, "object")',
      errors: [{
        message: 'instead of assert.strictEqual(typeof a, "object") use assert.isObject(a);'
      }]
    },
    {
      code: 'assert.strictEqual(typeof a, "boolean")',
      errors: [{
        message: 'instead of assert.strictEqual(typeof a, "boolean") use assert.isBoolean(a);'
      }]
    },
    {
      code: 'assert.strictEqual(typeof a, "function")',
      errors: [{
        message: 'instead of assert.strictEqual(typeof a, "function") use assert.isFunction(a);'
      }]
    },
    {
      code: 'assert.strictEqual(typeof a, "undefined")',
      errors: [{
        message: 'instead of assert.strictEqual(typeof a, "undefined") use assert.isUndefined(a);'
      }]
    },
    {
      code: 'assert.strictEqual("string", typeof a)',
      errors: [{
        message: 'instead of assert.strictEqual("string", typeof a) use assert.isString(a);'
      }]
    },
    {
      code: 'assert.strictEqual("number", typeof a)',
      errors: [{
        message: 'instead of assert.strictEqual("number", typeof a) use assert.isNumber(a);'
      }]
    },
    {
      code: 'assert.strictEqual("object", typeof a)',
      errors: [{
        message: 'instead of assert.strictEqual("object", typeof a) use assert.isObject(a);'
      }]
    },
    {
      code: 'assert.strictEqual("boolean", typeof a)',
      errors: [{
        message: 'instead of assert.strictEqual("boolean", typeof a) use assert.isBoolean(a);'
      }]
    },
    {
      code: 'assert.strictEqual("function", typeof a)',
      errors: [{
        message: 'instead of assert.strictEqual("function", typeof a) use assert.isFunction(a);'
      }]
    },
    {
      code: 'assert.strictEqual("undefined", typeof a)',
      errors: [{
        message: 'instead of assert.strictEqual("undefined", typeof a) use assert.isUndefined(a);'
      }]
    }
  ]
});

