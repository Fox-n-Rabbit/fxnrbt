# assert-enforce-below-above
Enforces using of `assert.isBelow` / `assert.isAbove` instead of explicit '>' / '<' comparisons in `assert`, `assert.isTrue`
and `assert.isFalse`

See also [assert-enforce-least-most](assert-enforce-least-most.md)

## Rule Details

The following patterns are considered problems:

```js
assert.isFalse(a <= b);
assert.isFalse(a >= b);
assert.isTrue(a > b);
assert.isTrue(a < b);
assert(a > b);
assert(a < b);

```


The following patterns are considered okay and do not cause warnings
(see "Notes" section):

```js
assert.isFalse(a < b);
assert.isFalse(a > b);
assert.isTrue(a >= b);
assert.isTrue(a <= b);
assert(a >= b);
assert(a <= b);
```

## Notes
Please keep in mind that, while `assert.isBelow(a, b)` is equivalent of 
`assert.isAbove(b, a)`, the following `assert.isFalse(a < b)` assertion
is not equivalent of `assert.isAbove(a, b)` since test `a < b` can fail for
one of two reasons actually:

* `a` is strictly greater than `b` (and this is exactly the abovementioned `assert.isAbove` case)
* `a` is equal to `b`
 
The same about `assert.isFalse(a > b)`,  `assert.isTrue(a <= b)`, `assert.isTrue(a <= b)`

There is a separate rule, [assert-enforce-least-most](assert-enforce-least-most.md)
you can use to cover this cases. The reason for having a separate rule for this is that `assert.isAtLeast`
and `assert.isAtMost` were introduced to chai.js [later](https://github.com/chaijs/chai/issues/580) 
than `assert.isAbove` and `assert.isBelow`.
