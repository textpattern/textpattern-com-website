module.exports = function (grunt)
{
    'use strict';

    // Load Grunt plugins.
    grunt.loadNpmTasks('grunt-combine-media-queries');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-critical');
    grunt.loadNpmTasks('grunt-dev-update');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-scss-lint');
    grunt.loadNpmTasks('grunt-shell');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Set up timestamp.
        opt : {
            timestamp: '<%= new Date().getTime() %>'
        },

        // Combine any matching media queries.
        cmq: {
            css: {
                files: {
                    'tmp/assets/css': [
                        'tmp/assets/css/*.css',
                        // Ignore these non-concatenated files.
                        '!tmp/assets/css/style.css',
                        '!tmp/assets/css/jquery-ui.css'
                    ]
                }
            }
        },

        // Use 'config.rb' file to configure Compass.
        compass: {
            dev: {
                options: {
                    config: 'config.rb',
                    force: true
                }
            }
        },

        // Concatenate CSS files prior to matching media queries.
        concat: {
            css: {
                src: [
                    'tmp/assets/css/style.css',
                    //'tmp/assets/css/jquery-ui.css',
                    'src/assets/js/libs/flowplayer/skin/minimalist.css'
                ],
                dest: 'tmp/assets/css/main.css'
            }
        },

        // Copy files from `src/` and `bower_components/` to `public/`.
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

            // Copy Flowplayer images and fonts to CSS folder (because Flowplayer's CSS expects relative path of `img/`).
            css: {
                files: [
                    {expand: true, cwd: 'src/assets/js/libs/flowplayer/skin/img/', src: ['**'], dest: 'public/assets/css/img/'},
                    {expand: true, cwd: 'src/assets/js/libs/flowplayer/skin/fonts/', src: ['**'], dest: 'public/assets/css/fonts/'}
                ]
            }
        },

        // Dissect and provide example file of critical above-the-fold CSS (we may use this in future).
        critical: {
            test: {
                options: {
                    css: [
                        'tmp/assets/css/main.css'
                    ],
                    width: 1280,
                    height: 900,
                    minify: false
                },
                src: 'public/mockups/index.html',
                dest: 'public/assets/css/critical.css'
            }
        },

        // Minify and copy CSS files to `public/assets/css/`.
        cssmin: {
            main: {
                options: {
                    rebase: false
                },
                files: {
                    'public/assets/css/main.css': ['tmp/assets/css/main.css'],
                    'public/assets/css/ie8.css': ['tmp/assets/css/ie8.css'],
                    'public/assets/css/design-patterns.css': ['tmp/assets/css/design-patterns.css']
                }
            }
        },

        // Report on any available updates for development dependencies.
        devUpdate: {
            main: {
                options: {
                    updateType: 'report',
                    reportUpdated: false // Don't report up-to-date packages.
                }
            }
        },

        // Check code quality of Gruntfile.js and site-specific JavaScript using JSHint.
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
                    responsiveNav: true,
                    prettyPrint: true
                }
            }
        },

        // Generate filename timestamps within template/mockup files.
        replace: {
            theme: {
                options: {
                    patterns: [
                        {
                            match: 'timestamp',
                            replacement: '<%= opt.timestamp %>'
                        },
                        {
                            match: 'year',
                            replacement: '<%= new Date().getFullYear() %>'
                        }
                    ]
                },
                files: [
                    {expand: true, cwd: 'src/templates/', src: ['**'], dest: 'public/templates/'},
                    {expand: true, cwd: 'src/mockups/', src: ['*.html'], dest: 'public/mockups/'},
                    {src: ['src/assets/js/main.js'], dest: 'tmp/assets/js/main.js'}
                ]
            }
        },

        // Validate Sass files via scss-lint.
        scsslint: {
            all: ['src/assets/sass/**/*.scss'],
            options: {
                bundleExec: true,
                colorizeOutput: false,
                config: '.scss-lint.yml',
                force: true,
                reporterOutput: 'scss-lint-report.xml'
            }
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
                // Preserve all comments that start with a bang (!) or include a closure compiler style.
                options: {
                    preserveComments: 'some'
                },

                files: [
                    {
                        'public/assets/js/main.js': ['tmp/assets/js/main.js'],
                        'public/assets/js/autosize.js': ['bower_components/autosize/jquery.autosize.js'],
                        'public/assets/js/cookie.js': ['bower_components/jquery.cookie/jquery.cookie.js'],
                        'public/assets/js/details.js': ['bower_components/jquery-details/jquery.details.js'],
                        'public/assets/js/picturefill.js': ['bower_components/picturefill/dist/picturefill.js'],
                        'public/assets/js/prettify.js': ['bower_components/google-code-prettify/src/prettify.js'],
                        'public/assets/js/require.js': ['bower_components/requirejs/require.js'],
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
        },

        // Directories watched and tasks performed by invoking `grunt watch`.
        watch: {
            sass: {
                files: 'src/assets/sass/**',
                tasks: ['sass']
            },

            js: {
                files: 'src/assets/js/*.js',
                tasks: ['jshint', 'copy:js', 'uglify']
            }
        }
    });

    // Register tasks.
    grunt.registerTask('build', ['jshint', 'sass', 'copy:img', 'copy:js', 'replace', 'uglify']);
    grunt.registerTask('criticalcss', ['sass', 'critical']);
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('sass', ['scsslint', 'compass', 'concat', 'cmq', 'cssmin', 'copy:css']);
    grunt.registerTask('setup', ['shell:setup']);
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('travis', ['jshint', 'compass']);
    grunt.registerTask('updatedev', ['devUpdate']);
};
