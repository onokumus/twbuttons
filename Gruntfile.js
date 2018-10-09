"use strict";

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    banner:
      "/*!\n" +
      " * <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
      " * <%= pkg.description %>\n" +
      " * <%= pkg.homepage %>\n" +
      " *\n" +
      " * Made by <%= pkg.author %>\n" +
      " * Under <%= pkg.license %> License\n" +
      " */\n",

    less: {
      options: {
        paths: "node_modules/bootstrap/less",
        sourceMap: true,
        outputSourceFiles: true,
        sourceMapURL: "<%= pkg.name %>.css.map",
        sourceMapFilename: "dist/<%= pkg.name %>.css.map",
        banner: "<%= banner %>"
      },
      develop: {
        files: {
          "dist/<%=pkg.name %>.css": "src/<%=pkg.name %>.less"
        }
      },
      production: {
        options: {
          compress: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: "<%= pkg.name %>.min.css.map",
          sourceMapFilename: "dist/<%= pkg.name %>.min.css.map",
          banner: "<%= banner %>"
        },
        files: {
          "dist/<%=pkg.name %>.min.css": "src/<%=pkg.name %>.less"
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-less");

  grunt.registerTask("default", ["less"]);
};
