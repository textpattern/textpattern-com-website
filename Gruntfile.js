module.exports = function (grunt)
{
    'use strict';

    // Load all Grunt tasks.
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Set up paths.
        paths: {
            src: {
                sass: 'src/assets/sass/',
                js: 'src/assets/js/',
                mockup: 'src/mockups/',
                templates: 'src/templates/'
            },
            tmp: {
                css: 'tmp/assets/css/',
                js: 'tmp/assets/js/'
            },
            dest: {
                css: 'public/assets/css/',
                js: 'public/assets/js/',
                mockup: 'public/mockups/',
                templates: 'public/templates/'
            }
        },

        // Set up timestamp.
        opt : {
            timestamp: '<%= new Date().getTime() %>'
        },

        // Clean distribution and temporary directories to start afresh.
        clean: [
            'tmp/',
            '<%= paths.dest.css %>',
            '<%= paths.dest.js %>',
            '<%= paths.dest.templates %>*/'
        ],

        // Run some tasks in parallel to speed up the build process.
        concurrent: {
            dist: [
                'css',
                'devUpdate',
                'jshint',
                'replace'
            ]
        },

        // Concatenate CSS files prior to matching media queries.
        concat: {
            css: {
                src: [
                    '<%= paths.tmp.css %>style.css',
                    //'<%= paths.tmp.css %>jquery-ui.css',
                    'node_modules/flowplayer/dist/skin/minimalist.css'
                ],
                dest: '<%= paths.tmp.css %>main.css'
            }
        },

        // Copy files.
        copy: {
            // Copy Textpattern branding assets.
            img: {
                files: [
                    {expand: true, cwd: 'src/assets/img/', src: ['**'], dest: 'public/assets/img/com/'},
                    {expand: true, cwd: 'node_modules/textpattern-branding/assets/img/', src: ['**'], dest: 'public/assets/img/branding/'},
                    {expand: true, cwd: 'node_modules/textpattern-branding/assets/img/apple-touch-icon/textpattern/', src: ['**'], dest: 'public/'},
                    {expand: true, cwd: 'node_modules/textpattern-branding/assets/img/favicon/textpattern/', src: ['**'], dest: 'public/'},
                    {expand: true, cwd: 'node_modules/textpattern-branding/assets/img/windows-site-tile/textpattern/', src: ['**'], dest: 'public/'},
                    {expand: true, cwd: 'node_modules/textpattern-branding/assets/img/misc/', src: ['hi.png', 'hi@2x.png'], dest: 'public/'}
                ]
            },
            // Copy JavaScript files from various sources.
            js: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: '*',
                        dest: 'public/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: '<%= paths.src.js %>libs/',
                        src: '**',
                        dest: '<%= paths.dest.js %>'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/flowplayer/dist/',
                        src: '**',
                        dest: '<%= paths.dest.js %>flowplayer/'
                    }
                ]
            },
            // Copy Flowplayer images and fonts to CSS folder (because Flowplayer's CSS expects relative path to these).
            css: {
                files: [
                    {
                        expand: true,
                        cwd: 'node_modules/flowplayer/dist/skin/img/',
                        src: '**',
                        dest: '<%= paths.dest.css %>img/'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/flowplayer/dist/skin/fonts/',
                        src: '**',
                        dest: '<%= paths.dest.css %>fonts/'
                    }
                ]
            }
        },

        // Report on any available updates for dependencies.
        devUpdate: {
            main: {
                options: {
                    updateType: 'report',
                    reportUpdated: false, // Don't report up-to-date packages.
                    packages: {
                        dependencies: true,
                        devDependencies: true
                    }
                }
            }
        },

        // Check code quality of Gruntfile.js and site-specific JavaScript using JSHint.
        jshint: {
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
                unused: false,
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
                    autosize: true,
                    responsiveNav: true,
                    Prism: true
                }
            },
            files: [
                'Gruntfile.js',
                '<%= paths.src.js %>*.js'
            ]
        },

        // Generate filename timestamps within templates files and main.js.
        replace: {
            theme: {
                options: {
                    patterns: [{
                            match: 'timestamp',
                            replacement: '<%= opt.timestamp %>'
                    }]
                },
                files: [
                    {
                        expand: true,
                        cwd: '<%= paths.src.templates %>',
                        src: '**',
                        dest: '<%= paths.dest.templates %>'
                    },
                    {
                        src: '<%= paths.src.js %>main.js',
                        dest: '<%= paths.tmp.js %>main.js'
                    }
                ]
            }
        },

        // Validate Sass files via sass-lint.
        sasslint: {
            options: {
                configFile: '.sass-lint.yml'
            },
            target: ['<%= paths.src.sass %>**/*.scss']
        },

        // Run Textpattern setup script.
        shell: {
            setup: {
                command: [
                    'php src/setup/setup.php'
                ].join('&&'),
                options: {
                    stdout: true
                }
            }
        },

        // Uglify and copy JavaScript files from `bower-components`, and also `main.js`, to `public/assets/js/`.
        uglify: {
            dist: {
                files: [
                    {
                        '<%= paths.dest.js %>main.js': ['<%= paths.tmp.js %>main.js'],
                        '<%= paths.dest.js %>autosize.js': ['node_modules/autosize/dist/autosize.js'],
                        '<%= paths.dest.js %>cookie.js': ['node_modules/jquery.cookie/jquery.cookie.js'],
                        '<%= paths.dest.js %>picturefill.js': ['node_modules/picturefill/dist/picturefill.js'],
                        '<%= paths.dest.js %>prism.js': [
                            'node_modules/prismjs/prism.js',
                            // Add any plugins
                            'node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js',
                            'node_modules/prismjs/plugins/show-language/prism-show-language.js',
                            // Add any additional languages
                            'node_modules/prismjs/components/prism-scss.js',
                            'node_modules/prismjs/components/prism-textile.js'
                        ],
                        '<%= paths.dest.js %>require.js': ['node_modules/requirejs/require.js'],
                        '<%= paths.dest.js %>responsivenav.js': ['node_modules/responsive-nav/responsive-nav.js']
                    }
                ]
            }
        },

        // Directories watched and tasks performed by invoking `grunt watch`.
        watch: {
            sass: {
                files: '<%= paths.src.sass %>**/*.scss',
                tasks: 'css'
            },
            js: {
                files: 'src/assets/js/*.js',
                tasks: ['jshint', 'uglify', 'copy:js']
            },
            templates: {
                files: '<%= paths.src.templates %>**',
                tasks: 'replace'
            }
        }

    });

    // Register tasks.
    grunt.registerTask('build', ['clean', 'concurrent', 'uglify', 'copy:js']);
    grunt.registerTask('css', ['sasslint', 'sass', 'concat', 'postcss', 'copy:css']);
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('setup', ['shell:setup']);
    grunt.registerTask('travis', ['jshint', 'build']);
};
