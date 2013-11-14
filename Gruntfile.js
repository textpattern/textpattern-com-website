module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            sass: {
                files: 'src/assets/sass/**',
                tasks: ['sass']
            },

            js: {
                files: 'src/assets/js/*.js',
                tasks: ['jshint', 'copy', 'uglify']
            }
        },

        compass: {
            dev: {
                options: {
                    config: 'config.rb',
                    force: true
                }
            }
        },

        copy: {
            img: {
                files: [
                    {expand: true, cwd: 'src/assets/img/', src: ['**'], dest: 'public/assets/img/com/'},
                    {expand: true, cwd: 'bower_components/textpattern-branding/assets/img/', src: ['**'], dest: 'public/assets/img/branding/'},
                    {expand: true, cwd: 'bower_components/textpattern-branding/assets/img/apple-touch-icon/textpattern/', src: ['**'], dest: 'public/'},
                    {expand: true, cwd: 'bower_components/textpattern-branding/assets/img/favicon/textpattern/', src: ['**'], dest: 'public/'},
                    {expand: true, cwd: 'bower_components/textpattern-branding/assets/img/windows-site-tile/textpattern/', src: ['**'], dest: 'public/'},
                    {expand: true, cwd: 'bower_components/textpattern-branding/assets/img/misc/', src: ['hi.png', 'hi@2x.png'], dest: 'public/'}
                ]
            },

            js: {
                files: [
                    {expand: true, cwd: 'src/', src: ['*'], dest: 'public/', filter: 'isFile'},
                    {expand: true, cwd: 'src/assets/js/libs/', src: ['**'], dest: 'public/assets/js/'}
                ]
            },

            css: {
                files: [
                    {expand: true, cwd: 'src/assets/js/libs/flowplayer/skin/img/', src: ['**'], dest: 'public/assets/css/img/'}
                ]
            }
        },

        jshint: {
            files: ['Gruntfile.js', 'src/assets/js/*.js'],
            options: {
                bitwise: true,
                camelcase: true,
                curly: true,
                eqeqeq: true,
                es3: true,
                forin: true,
                immed: true,
                indent: 4,
                latedef: true,
                noarg: true,
                noempty: true,
                nonew: true,
                quotmark: 'single',
                undef: true,
                unused: true,
                strict: true,
                trailing: true,
                browser: true,
                globals: {
                    jQuery: true,
                    Zepto: true,
                    define: true,
                    module: true,
                    require: true,
                    requirejs: true,
                    responsiveNav: true,
                    prettyPrint: true,
                    WebFont: true
                }
            }
        },

        cssmin: {
            main: {
                files: {
                    'public/assets/css/main.css': [
                        'tmp/assets/css/style.css',
                        'src/assets/js/libs/flowplayer/skin/minimalist.css'
                    ],
                    'public/assets/css/ie8.css': ['tmp/assets/css/ie8.css']
                }
            }
        },

        uglify: {
            dist: {
                options: {
                    mangle: false,
                    preserveComments: 'some'
                },

                files: [
                    {
                        'public/assets/js/main.js': ['src/assets/js/main.js'],
                        'public/assets/js/details.js': ['bower_components/jquery-details/jquery.details.js'],
                        'public/assets/js/placeholder.js': ['bower_components/jquery-placeholder/jquery.placeholder.js'],
                        'public/assets/js/prettify.js': ['bower_components/google-code-prettify/src/prettify.js'],
                        'public/assets/js/require.js': ['bower_components/requirejs/require.js'],
                        'public/assets/js/cookie.js': ['bower_components/jquery.cookie/jquery.cookie.js'],
                        'public/assets/js/responsivenav.js': ['bower_components/responsive-nav/responsive-nav.js']
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/google-code-prettify/src/',
                        src: 'lang-*.js',
                        dest: 'public/assets/js/'
                    }
                ]
            }
        }
    });

    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('sass', ['compass', 'cssmin', 'copy:css']);
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['jshint', 'sass', 'copy:img', 'copy:js', 'uglify']);
    grunt.registerTask('travis', ['jshint', 'compass']);
};
