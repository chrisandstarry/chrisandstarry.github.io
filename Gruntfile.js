module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({

    less: {
      styles: {
        files: {
          'css/styles.css': 'less/styles.less'
        }
      },
    },

    watch: {
      less: {
        files: 'less/{,**/}*.less',
        tasks: ['less']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);
}
