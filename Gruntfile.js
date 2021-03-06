'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt, {config: 'package.json'});
    grunt.loadNpmTasks('assemble');
    require('time-grunt')(grunt);

    var redlightConfig = {
        app: 'app',
        dist: 'dist'
    };

    grunt.initConfig({
        redlight: redlightConfig,
        watch: {
            options: {
                nospawn: true,
                livereload: true
            },
            concatJavascript: {
                files: ['<%= redlight.app %>/js/{,*/}*.js'],
                tasks: ['concat:javascripts']
            },
            compass: {
                files: ['<%= redlight.app %>/src/sass/{,*/}*.{scss,sass}'],
                tasks: ['compass:server', 'concat:stylesheets']
            },
            assemble: {
                files: ['<%= redlight.app %>/layouts/*.hbs', 'app/pages/*.hbs', 'app/partials/**/*.hbs'],
                tasks: ['assemble']
            },
            // img: {
            //     files: ['<%= redlight.app %>/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'],
            //     options: {
            //         livereload: true
            //     }
            // }
        },
        connect: {
            options: {
                port: 9000,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, 'app'),
                            lrSnippet
                        ];
                    }
                }
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '<%= redlight.app %>/*.html',
                        '<%= redlight.app %>/css',
                        '<%= redlight.app %>/js/redlight.js',
                        '<%= redlight.dist %>/*',
                        '!<%= redlight.dist %>/.git*'
                    ]
                }]
            },
            dist_folder: {
                files: [{
                    src: [
                        '<%= redlight.dist %>/*'
                    ]
                }]
            },
            server: {
                files: [{
                    src: [
                        '<%= redlight.app %>/*.html',
                        '<%= redlight.app %>/css',
                        '<%= redlight.app %>/js/redlight.js',
                        '<%= redlight.dist %>/*'
                    ]
                }]
            },
            css: {
                files: [{
                    src: [
                        '<%= redlight.dist %>/css/redlight.css'
                    ]
                }]
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= redlight.app %>',
                    dest: '<%= redlight.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        'components/**/*',
                        '*.html',
                        'img/**/*'
                    ]
                }]
            },
            styles: {
                expand: true,
                cwd: '<%= redlight.app %>/css',
                dest: '<%= redlight.dist %>/css/',
                src: '{,*/}*.css'
            },
            javascripts: {
                expand: true,
                cwd: '<%= redlight.app %>/js',
                dest: '<%= redlight.dist %>/js/',
                src: '*.js'
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        compass: {
            options: {
                sassDir: '<%= redlight.app %>/src/sass',
                cssDir: '<%= redlight.app %>/css',
                outputStyle: 'nested',
                imagesDir: '<%= redlight.app %>/img',
                imagesPath: '<%= redlight.app %>/img',
                httpGeneratedImagesPath: '../img',
                httpImagesPath: '../img',
                relative_assets: false
            },
            dist: {
                options: {
                    noLineComments: true
                }
            },
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
        concat: {
            javascripts: {
                options: {
                  separator: ';'
                },
                src: [
                    '<%= redlight.app %>/js/vendor/classie.js',
                    '<%= redlight.app %>/js/vendor/mlpushmenu.js',
                    '<%= redlight.app %>/components/bootstrap/dist/js/bootstrap.min.js',
                    '<%= redlight.app %>/js/lib/_redlight.js',
                    '<%= redlight.app %>/js/lib/redlight.misc.js',
                    '<%= redlight.app %>/js/lib/redlight.animation.js',
                    '<%= redlight.app %>/js/lib/redlight.modal.js'
                ],
                dest: '<%= redlight.app %>/js/redlight.js',
            },
            stylesheets: {
                options: {
                    separator: ''
                },
                src: [
                    '<%= redlight.app %>/components/normalize-css/normalize.css',
                    '<%= redlight.app %>/components/bootstrap/dist/css/bootstrap.min.css',
                    '<%= redlight.app %>/css/redlight.css'
                ],
                dest: '<%= redlight.app %>/css/redlight.css'
            }
        },
        uglify: {
            options: {
              mangle: true
            },
            server: {
                files: {
                    '<%= redlight.app %>/js/application.js': [ '<%= redlight.app %>/js/application.js' ],
                    '<%= redlight.app %>/js/redlight.js': [ '<%= redlight.app %>/js/redlight.js' ]
                }
            }
        },
        assemble: {
            options: {
                layout: "app/layouts/application.hbs",
                partials: "app/partials/**/*.hbs",
                flatten: true
            },
            pages: {
                files: {
                    'app/': ['app/pages/*.hbs']
                }
            }
        },
        cssmin: {
            add_banner: {
                options: {
                    banner: '/* Compiled Redlight stylesheet assets */'
                },
                files: {
                    '<%= redlight.dist %>/css/redlight.css': ['<%= redlight.dist %>/css/redlight.css']
                }
            }
        },
        cdnify: {
            dist: {
                options: {
                    base: 'https://d3rudm8tij9zbc.cloudfront.net/redlight/assets/',
                    html: {
                        'link[rel=icon]' : 'href'
                    }
                },
                files: [{
                    expand: true,
                    cwd: 'dist',
                    src: '**/*.{css,html}',
                    dest: 'dist'
                }]
            }
        },
        htmlbuild: {
            dist: {
                src: '<%= redlight.dist %>/*.html',
                dest: '<%= redlight.dist %>/'
            }
        }
    });

    grunt.registerTask('serve', function (target) {
        grunt.task.run([
            'clean:server',
            'compass:server',
            'concat:javascripts',
            'concat:stylesheets',
            'assemble',
            'connect:livereload',
            'open',
            'watch'
        ]);
    });
    grunt.registerTask('build', [
        'clean:dist',
        'compass:dist',
        'concat:javascripts',
        'concat:stylesheets',
        'assemble',
        'copy:styles',
        'cssmin',
        'uglify:server',
        'copy:javascripts',
        'copy:dist',
        'htmlbuild:dist',
        'cdnify'
    ]);
    grunt.registerTask('clean-dist', [
        'clean:dist_folder'
    ]);
};