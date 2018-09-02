module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-eslint');

  grunt.config('eslint.build', {
    src: ['grunt/**/*.js', 'Gruntfile.js'],
    options: {
        config: 'tests/conf/eslint/src.json'
    }
  });


  grunt.config('eslint.src', {
    src: ['lib/**/*.js', 'index.js'],
    options: {
        config: 'tests/conf/eslint/src.json'
    }
  });

  grunt.config('eslint.test', {
    src: ['tests/**/*.js'],
    options: {
        config: 'tests/conf/eslint/test.json'
    }
  });

};
