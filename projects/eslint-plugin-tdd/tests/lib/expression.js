var assert = require('chai').assert;
var expression = require('../../lib/expression');

describe('expression.js', function() {

    describe('expression.isStandardAssertion', function() {
        it('expression.isStandardAssertion should return false in node.callee is missing', function() {
            assert.isFalse(expression.isStandardAssertion('someAssertion', {}));
        });

        it('expression.isStandardAssertion should return false in callee.type !== "MemberExpression"', function() {
            assert.isFalse(expression.isStandardAssertion('someAssertion',{callee: {type: 'whatever'}}));
        });

    });


    describe('expression.isAssertEqual', function() {
        it('expression.isAssertEqual should return false in node.callee is missing', function() {
            assert.isFalse(expression.isAssertEqual({}));
        });

        it('expression.isAssertEqual should return false in callee.object.name !== "assert"', function() {
            assert.isFalse(expression.isAssertEqual({callee: {type: 'MemberExpression', object: {name: 'ossert'}}}));
        });
    });

    describe('expression.isAssertStrictEqual', function() {
        it('expression.isAssertStrictEqual should return false in node.callee is missing', function() {
            assert.isFalse(expression.isAssertStrictEqual({}));
        });

        it('expression.isAssertStrictEqual should return false in callee.type !== "MemberExpression"', function() {
            assert.isFalse(expression.isAssertStrictEqual({callee: {type: 'whatever'}}));
        });

        it('expression.isAssertStrictEqual should return false in callee.object.name !== "assert"', function() {
            assert.isFalse(expression.isAssertStrictEqual({callee: {type: 'MemberExpression', object: {name: 'ossert'}}}));
        });

        it('expression.isAssertStrictEqual should return false in callee.object.name !== "assert"', function() {
            assert.isFalse(expression.isAssertStrictEqual({callee: {property: {name: 'isOssertStrictEqual'}, type: 'MemberExpression', object: {name: 'assert'}}}));
        });
    });

    describe('expression.isAssert', function() {
        it('expression.isAssert should return false in node.callee is missing', function() {
            assert.isFalse(expression.isAssert({}));
        });
    });

    describe('expression.isAssertIsTrue', function() {
        it('expression.isAssertIsTrue should return false in node.callee is missing', function() {
            assert.isFalse(expression.isAssertIsTrue({}));
        });

        it('expression.isAssertIsTrue should return false in callee.object.name !== "assert"', function() {
            assert.isFalse(expression.isAssertIsTrue({callee: {type: 'MemberExpression', object: {name: 'ossert'}}}));
        });
    });

    describe('expression.isAssertIsFalse', function() {
        it('expression.isAssertIsFalse should return false in node.callee is missing', function() {
            assert.isFalse(expression.isAssertIsFalse({}));
        });

        it('expression.isAssertIsFalse should return false in callee.object.name !== "assert"', function() {
            assert.isFalse(expression.isAssertIsFalse({callee: {type: 'MemberExpression', object: {name: 'ossert'}}}));
        });
    });


});
