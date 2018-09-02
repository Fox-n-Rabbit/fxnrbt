
module.exports = function(grunt) {

    grunt.loadTasks('grunt/tasks');

    grunt.registerTask('test', [
            'eslint',
            'mocha_istanbul'
    ]);

};

