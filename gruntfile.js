(function () {
  
  'use strict';

    module.exports = function(grunt) {

      grunt.initConfig({
        jshint: {
          files: ['Gruntfile.js', 'src/**/*.js', 'tests/**/*.js'],
          options: {
            globals: {
              jQuery: true
            }
          }
        },
        karma: {
          unit: {
            configFile: 'karma.conf.js'
          }
        },
        watch: {
          files: ['<%= jshint.files %>'],
          tasks: ['jshint']
        }
      });

      grunt.loadNpmTasks('grunt-contrib-jshint');
      grunt.loadNpmTasks('grunt-contrib-watch');
      grunt.loadNpmTasks('grunt-karma');

      grunt.registerTask('default', ['jshint', 'karma']);

    };

}());