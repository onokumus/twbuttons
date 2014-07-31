'use strict';

module.exports = function(grunt){
  
  grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  bower: grunt.file.readJSON('.bowerrc'),
		   
    banner: '/**\n' +
            '* <%=pkg.name %> v<%= pkg.version %>\n' +
            '* Author : <%= pkg.author.name %> \n' +
            '* date <%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT") %>\n' +
            '*/\n',

  less: {
      options: {
        paths: '<%= bower.directory %>/bootstrap/less',
	banner: '<%= banner %>'
      },
      develop: {
        files: {
          'dist/<%=pkg.name %>.css': 'src/<%=pkg.name %>.less'
        }
      },
      production: {
        options: {
          compress: true
        },
        files: {
          'dist/<%=pkg.name %>.min.css': 'src/<%=pkg.name %>.less'
        }
      }
    }
  });
  
  
  grunt.loadNpmTasks('grunt-contrib-less');
  
    grunt.registerTask('default', ['less']);

};
