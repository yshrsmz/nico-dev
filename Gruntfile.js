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
                        './js_dev/libs/lazyload.js',
                        //'./js_dev/categoryalliance.js',
                        './js_dev/nicoapi.js',
                        //'./js_dev/adsSimple-1.0.0.min.js',
                        './js_dev/common.js'
                    ],
                    'js/index.min.js': [
                        './js_dev/bookmarkbubble.js',
                        './js_dev/bookmarkbubble_move.js',
                        //'./js_dev/middle_banner.js',
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
                        './js_dev/libs/lazyload.js',
                        //'./js_dev/categoryalliance.js',
                        './js_dev/nicoapi.js',
                        //'./js_dev/adsSimple-1.0.0.min.js',
                        './js_dev/common.js'
                    ],
                    'js/index.min.js': [
                        './js_dev/bookmarkbubble.js',
                        './js_dev/bookmarkbubble_move.js',
                        //'./js_dev/middle_banner.js',
                        './js_dev/index.js'
                    ]
                }
            }
        },
        spritegen: {
            options: {
                downsampling: 'LanczosSharp',
                templateUrl: 'template.mustache'
            },
            common:{
                options: {
                    // output file path
                    outputCss: 'scss/sprite/_sp_common.scss',

                    // actual path written in output css file.
                    httpImagePath: '../img/sprite/sp_common.png',

                    layoutType: 'default',
                    spIdentifier: '',
                    output: {
                        legacy: {
                            pixelRatio: 1,
                            outputImage: './img/sprite/sp_common_bk.png'
                        },
                        retina: {
                            pixelRatio: 2,
                            outputImage: './img/sprite/sp_common.png'
                        }
                    }
                },
                files: {
                    '.': 'img/sprite/src/sp_common/*'
                }
            }
        },
        sass: {
            dist: {
                files: {
                    './css/index.css':'./scss/index.scss'
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
        },
        watch: {
            all: {
                files: ['scss/**/*.scss', 'js_dev/**/*.js'],
                tasks: ['sass', 'uglify:dev'],
                options: {
                    spawn: false
                }
            }
        }
    });

    // Load the plugin
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-csso');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-spritesheet-generator');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'sass', 'csso', 'htmlmin']);

};