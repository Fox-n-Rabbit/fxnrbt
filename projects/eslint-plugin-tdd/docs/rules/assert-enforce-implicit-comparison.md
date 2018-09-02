# assert-enforce-implicit-comparison
Enforces using of `assert.equal` / `assert.strictEqual` instead of explicit comparisons in assert

## Rule Details

The following patterns are considered problems:

```js
assert(a == b);
assert(a != b);
assert(a === b);
assert(a !== b);

assert.isFalse(something == anything);
assert.isTrue(something == anything);
assert.isFalse(something != anything);
assert.isTrue(something != anything);
assert.isFalse(something === anything);
assert.isTrue(something === anything);
assert.isFalse(something !== anything);
assert.isTrue(something !== anything);
```


The following patterns are considered okay and do not cause warnings:

```js
assert.equal(a, b);
assert.strictEqual(a, b);
assert.notEqual(a, b);
assert.notStrictEqual(a, b);
```
