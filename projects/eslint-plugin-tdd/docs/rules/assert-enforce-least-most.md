# assert-enforce-least-most
Enforces using of `assert.isAtLeast` / `assert.isAtMost` instead of explicit '>=' / '<=' comparisons in `assert`, `assert.isTrue`
and `assert.isFalse`

See also [assert-enforce-below-above](assert-enforce-below-above.md)

## Rule Details

The following patterns are considered problems:

```js
assert.isFalse(a < b);
assert.isFalse(a > b);
assert.isTrue(a <= b);
assert.isTrue(a >= b);
assert(a <= b);
assert(a >= b);
```


The following patterns are considered okay and do not cause warnings:

```js
assert.isFalse(a <= b);
assert.isFalse(a >= b);
assert.isTrue(a < b);
assert.isTrue(a > b);
assert(a < b);
assert(a < b);
```
 
