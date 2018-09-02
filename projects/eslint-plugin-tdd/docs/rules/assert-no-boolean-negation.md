# assert-no-boolean-negate  
Disallows passing negated argument to `assert.isTrue` / `assert.isFalse`. 

## Rule Details

The following patterns are considered problems:

```js
assert.isFalse(!val);
assert.isTrue(!val);
assert.isFalse(!func());
assert.isTrue(!func());

assert(!expression);
```

The following patterns are considered okay and do not cause warnings:

```js
assert.isTrue(<expression>);
```

```js
assert.isFalse(<expression>);
```


