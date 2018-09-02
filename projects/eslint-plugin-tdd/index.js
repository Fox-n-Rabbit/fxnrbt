'use strict';

module.exports = {
  rules: {
    'assert-enforce-boolean': require('./lib/rules/assert-enforce-boolean'),
    'assert-no-boolean-negation': require('./lib/rules/assert-no-boolean-negation'),
    'assert-enforce-implicit-comparison': require('./lib/rules/assert-enforce-implicit-comparison'),
    'assert-enforce-below-above': require('./lib/rules/assert-enforce-below-above'),
    'assert-enforce-least-most': require('./lib/rules/assert-enforce-least-most'),
    'assert-no-typeof': require('./lib/rules/assert-no-typeof'),
    'assert-no-operator': require('./lib/rules/assert-no-operator')
  },
  rulesConfig: {
    'assert-enforce-boolean': 0,
    'assert-no-boolean-negation': 0,
    'assert-enforce-implicit-comparison': 0,
    'assert-enforce-below-above': 0,
    'assert-enforce-least-most': 0,
    'assert-no-typeof': 0,
    'assert-no-operator': 0
  }
};
