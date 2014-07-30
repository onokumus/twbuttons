'use strict';

module.exports = function(grunt){
  
  grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  bower: grunt.file.readJSON('.bowerrc'),
		   
    banner: '/**\n' +
            '* <%=pkg.name %> v<%= pkg.version %>\n' +
            '* Author : <%= pkg.author %> \n' +
            '* date <%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT") %>\n' +
            '*/\n',

  less: {
      options: {
        paths: '<%= bower.directory %>/bootstrap/less',
	banner: '<%= banner %>'
      },
      develop: {
        files: {
          'dist/buttons.css': 'src/buttons.less'
        }
      },
      production: {
        options: {
          compress: true
        },
        files: {
          'dist/buttons.min.css': 'src/buttons.less'
        }
      }
    }
  });
  
  
  grunt.loadNpmTasks('grunt-contrib-less');
  
    grunt.registerTask('default', ['less']);

};
