# assert-no-typeof  
Disallows using of `assert.operator`

## Rule Details

The following patterns are considered problems:

```js
assert.operator(a, "==", b);  // use assert.equal(a, b) (or, even better, assert.strictEqual(a, b))
assert.operator(a, "===", b); // use assert.strictEqual(a, b))
assert.operator(a, "<", b); // use assert.isBelow(a, b))
assert.operator(a, ">", b); // use assert.isAbove(a, b))
assert.operator(a, "<=", b); // use assert.isAtMost(a, b))
assert.operator(a, ">", b); // use assert.isAtLeast(a, b))
assert.operator(a, "!=", b); // use assert.notEqual(a, b)) (or, even better, assert.notStrictEqual(a, b))
assert.operator(a, "!==", b); // use assert.notStrictEqual(a, b)
```

The following patterns are considered okay and do not cause warnings:

```js
// we basically just ignore unknown operators
assert.operator(a, '**', b)  
```


