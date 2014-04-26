module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        sass: {
            dist: {
                files: {
                    './css/*.css':'./scss/*.scss'
                }
            }
        },
        csso: {
            compress: {
                //TODO:このオプションはあとで見る
//                options: {
//                    report: 'gzip'
//                },
                files: {
                    './css/index.min.css': './css/index.css'
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-csso');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'sass', 'csso']);

};