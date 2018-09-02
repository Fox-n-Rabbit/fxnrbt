# assert-no-typeof  
Disallows using of `typeof a == b` sort of expressions in favor of specialiazed `assert.isString`, `assert.isNumber` etc. assertions

## Rule Details

The following patterns are considered problems:

```js
assert(typeof a == "boolean");
assert(typeof a == "string");
assert(typeof a == "number");
assert(typeof a == "object");
assert(typeof a == "function");
assert(typeof a == "undefined");
assert("boolean" == typeof a);
assert("string" == typeof a);
assert("number" == typeof a);
assert("object" == typeof a);
assert("function" == typeof a);
assert("undefined" == typeof a);
assert(typeof a === "boolean");
assert(typeof a === "string");
assert(typeof a === "number");
assert(typeof a === "object");
assert(typeof a === "function");
assert(typeof a === "undefined");
assert("boolean" === typeof a);
assert("string" === typeof a);
assert("number" === typeof a);
assert("object" === typeof a);
assert("function" === typeof a);
assert("undefined" === typeof a);
assert.isTrue(typeof a == "boolean");
assert.isTrue(typeof a == "string");
assert.isTrue(typeof a == "number");
assert.isTrue(typeof a == "object");
assert.isTrue(typeof a == "function");
assert.isTrue(typeof a == "undefined");
assert.isTrue("boolean" == typeof a);
assert.isTrue("string" == typeof a);
assert.isTrue("number" == typeof a);
assert.isTrue("object" == typeof a);
assert.isTrue("function" == typeof a);
assert.isTrue("undefined" == typeof a);
assert.isTrue(typeof a === "boolean");
assert.isTrue(typeof a === "string");
assert.isTrue(typeof a === "number");
assert.isTrue(typeof a === "object");
assert.isTrue(typeof a === "function");
assert.isTrue(typeof a === "undefined");
assert.isTrue("boolean" === typeof a);
assert.isTrue("string" === typeof a);
assert.isTrue("number" === typeof a);
assert.isTrue("object" === typeof a);
assert.isTrue("function" === typeof a);
assert.isTrue("undefined" === typeof a);
assert.equal(typeof a, "string");
assert.equal(typeof a, "number");
assert.equal(typeof a, "object");
assert.equal(typeof a, "boolean");
assert.equal(typeof a, "function");
assert.equal(typeof a, "undefined");
assert.equal("string", typeof a);
assert.equal("number", typeof a);
assert.equal("object", typeof a);
assert.equal("boolean", typeof a);
assert.equal("function", typeof a);
assert.equal("undefined", typeof a);
assert.strictEqual(typeof a, "string");
assert.strictEqual(typeof a, "number");
assert.strictEqual(typeof a, "object");
assert.strictEqual(typeof a, "boolean");
assert.strictEqual(typeof a, "function");
assert.strictEqual(typeof a, "undefined");
assert.strictEqual("string", typeof a);
assert.strictEqual("number", typeof a);
assert.strictEqual("object", typeof a);
assert.strictEqual("boolean", typeof a);
assert.strictEqual("function", typeof a);
assert.strictEqual("undefined", typeof a);
```

The following patterns are considered okay and do not cause warnings:

```js
// And any types except "boolean", "string", "number", "object", "function", "undefined"
assert(typeof a == "unknown"); 
assert("unknown" == a);  
```


