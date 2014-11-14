/**
 * Created by kyawtun on 14/11/14.
 */

module.exports = function(grunt) {

  grunt.initConfig({
    nodewebkit: {
      options: {
        platforms: ['win', 'osx'],
        buildDir: './bin' // Where the build version of my node-webkit app is saved
      },
      src: ['./app/**/*']
    }
  });


  grunt.loadNpmTasks('grunt-node-webkit-builder');

  grunt.registerTask('default', ['nodewebkit']);

};

