module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            sdk: {
                files: {
                    "src/stretchr.min.js" : ["src/stretchr.js"]
                }
            }
        },

        jasmine: {
            sdk: {
              src: 'src/**/*.js',
              options: {
                specs: 'test/spec/*Spec.js',
                helpers: 'test/spec/*Helper.js'
              }
            }
        },

        watch: {
            scripts: {
                files: ["src/stretchr.js", "test/**/*"],
                tasks: ["production"]
            }
        }
    });


    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    // Default task(s).
    grunt.registerTask('default', ['production']);
    grunt.registerTask("production", ["uglify:sdk", "jasmine:sdk"]);

};