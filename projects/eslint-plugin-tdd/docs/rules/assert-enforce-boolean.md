# assert-enforce-boolean  
Use `assert.isTrue` / `assert.isFalse` whenever it is possible 

## Rule Details

The following patterns are considered problems:

```js
assert.equal(<expression>, true);
assert.equal(<expression>, false);
assert(val === true);
assert(val === false);
```
The following patterns are considered okay and do not cause warnings:

```js
assert.isTrue(something);
```

```js
assert.isFalse(something);
```

## Notes
Strictly speaking,  `assert.equal(<expression>, true);` is not exact
equivalent of `assert.isTrue(<expression>)`, since equal is equivalent of 
`==` comparison. Thus, following assertions won't fail:

```js
assert.equal('1', true);
assert.equal(1, true);
assert.equal('', false);
assert.equal('0', false);
assert.equal(0, false);
```        

But these will fail, that's for sure:
```js
assert.isTrue('1');
assert.isTrue(1);
assert.isFalse('');
assert.isFalse('0');
assert.isFalse(0);
```        

But the whole idea behind `eslint-plugin-tdd` is to enforce more strict rules
and reduce probability of unintentional errors, and non-strict comparison is
definitely quite an error-prone javascript feature. 

