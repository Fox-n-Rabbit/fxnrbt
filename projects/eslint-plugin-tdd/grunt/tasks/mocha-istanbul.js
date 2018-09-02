module.exports = function(grunt) {
  var argv = require('optimist').argv;

  grunt.loadNpmTasks('grunt-mocha-istanbul');

  global.assert = require('chai').assert;

  var getOptions = function getOptions() {
    var options = {
      mask: 'lib/**/*.js',
      reportFormats: ['lcov'],
      coverageFolder: 'target/reports/core/coverage/node',
      captureConsole: true
    };

    if (argv.grep) {
      options.grep = argv.grep;
    } else {
      options.check = {
        statements: 99.9,
        branches: 94.0,
        functions: 99.9,
        lines: 99.9
      };
    }

    options.captureConsole = !!grunt.option('with-logs');

    return options;
  };

  grunt.config('mocha_istanbul', {
    // Configure a mochaTest task
    coverage: {
      src: 'tests',
      options: getOptions()
    }
  });

};
