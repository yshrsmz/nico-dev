module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                preserveComments: 'some',
                mangle: {
                    except: ['$', 'jQuery']
                }
            },
            build: {
                options: {
                    compress: {
                        drop_console: true
                    }
                },
                files: {
                    'js/common.min.js': [
                        './js_dev/libs/zepto.min.js',
                        './js_dev/libs/showMenu.js',
                        './js_dev/libs/lazyload.js',
                        './js_dev/categoryalliance.js',
                        './js_dev/nicoapi.js',
                        './js_dev/adsSimple-1.0.0.min.js',
                        './js_dev/common.js'
                    ],
                    'js/index.min.js': [
                        './js_dev/bookmarkbubble.js',
                        './js_dev/bookmarkbubble_move.js',
                        './js_dev/middle_banner.js',
                        './js_dev/index.js'
                    ]
                }
            },
            dev: {
                options: {
                    beautify: true
                },
                files: {
                    'js/common.min.js': [
                        './js_dev/libs/zepto.min.js',
                        './js_dev/libs/showMenu.js',
                        './js_dev/libs/lazyload.js',
                        './js_dev/categoryalliance.js',
                        './js_dev/nicoapi.js',
                        './js_dev/adsSimple-1.0.0.min.js',
                        './js_dev/common.js'
                    ],
                    'js/index.min.js': [
                        './js_dev/bookmarkbubble.js',
                        './js_dev/bookmarkbubble_move.js',
                        './js_dev/middle_banner.js',
                        './js_dev/index.js'
                    ]
                }
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
        },
        htmlmin: {
            dist: {
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    './index.html': './index_dev.html'
                }
            }
        }
    });

    // Load the plugin
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-csso');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'sass', 'csso', 'htmlmin']);

};