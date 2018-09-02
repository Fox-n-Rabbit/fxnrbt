
eslint-plugin-tdd
===================

Provides tdd ("assert"-like to put it simple) set of rules.

Currently is tested against [chai.js](http://chaijs.com)

# Installation

Install [ESLint](https://www.github.com/eslint/eslint) either locally or globally.

```sh
$ npm install eslint
```

If you installed `ESLint` globally, you have to install Chai plugin globally too. Otherwise, install it locally.

```sh
$ npm install eslint-plugin-tdd
```

The project is still very young (literally months old),
and there are seven rules under the hood so far.
This does not mean you can not use this project -
 after all this project is dedicated to testing the quality of test code. Keeping in mind that, it is production ready.

# Configuration

Add `plugins` section and specify eslint-plugin-tdd as a plugin.

```json
{
  "plugins": [
    "tdd"
  ]
}
```


Finally, enable all of the rules that you would like to use.

```json
{
  "rules": {
    "tdd/assert-enforce-boolean": 1,
  }
}
```

# List of supported rules

* [assert-enforce-below-above](https://github.com/Fox-n-Rabbit/fxnrbt/blob/master/projects/eslint-plugin-tdd/docs/rules/assert-enforce-below-above.md): Enforces using of `assert.isBelow` / `assert.isAbove` instead of explicit '>' / '<' comparisons in `assert`, `assert.isTrue`, `assert.isFalse`
* [assert-enforce-boolean](https://github.com/Fox-n-Rabbit/fxnrbt/blob/master/projects/eslint-plugin-tdd/docs/rules/assert-enforce-boolean.md): Enforces using of `assert.isTrue` and `assert.isFalse` wherever and whenever it is possible.
* [assert-enforce-implicit-comparison](https://github.com/Fox-n-Rabbit/fxnrbt/blob/master/projects/eslint-plugin-tdd/docs/rules/assert-enforce-implicit-comparison.md): Enforces using of `assert.equal` / `assert.strictEqual` instead of explicit comparisons in assert
* [assert-enforce-least-most](https://github.com/Fox-n-Rabbit/fxnrbt/blob/master/projects/eslint-plugin-tdd/docs/rules/assert-enforce-least-most.md): Enforces using of `assert.isAtLeast` / `assert.isAtMost` instead of explicit '>=' / '<=' comparisons in `assert`, `assert.isTrue` and `assert.isFalse`
* [assert-no-boolean-negation](https://github.com/Fox-n-Rabbit/fxnrbt/blob/master/projects/eslint-plugin-tdd/docs/rules/assert-no-boolean-negation.md): Enforces using of `assert.isTrue` and `assert.isFalse` without boolean negation.
* [assert-no-operator](https://github.com/Fox-n-Rabbit/fxnrbt/blob/master/projects/eslint-plugin-tdd/docs/rules/assert-no-operator.md): Disallows using of `assert.operator`
* [assert-no-typeof](https://github.com/Fox-n-Rabbit/fxnrbt/blob/master/projects/eslint-plugin-tdd/docs/rules/assert-no-typeof.md): Disallows using of `typeof a == b` sort of expressions in favor of specialiazed `assert.isString`, `assert.isNumber` etc. assertions 

# License

We are too polite to say take this code and do whatever you fuck want to do, so here we go:

eslint-plugin-tdd is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
