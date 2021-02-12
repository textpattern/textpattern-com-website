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
                fonts: 'src/assets/fonts/',
                sass: 'src/assets/sass/',
                js: 'src/assets/js/',
                mockups: 'src/mockups/',
                templates: 'src/templates/'
            },
            dest: {
                css: 'public/assets/css/',
                fonts: 'public/assets/fonts/',
                img: 'public/assets/img/',
                js: 'public/assets/js/',
                mockups: 'public/mockups/',
                templates: 'public/themes/textpattern-com/'
            }
        },

        // Set up timestamp.
        opt : {
            timestamp: '<%= new Date().getTime() %>'
        },

        // Clean distribution directories/files to start afresh.
        clean: [
            '<%= paths.dest.css %>',
            '<%= paths.dest.fonts %>',
            '<%= paths.dest.img %>',
            '<%= paths.dest.js %>',
            '<%= paths.dest.mockups %>*/',
            '<%= paths.dest.templates %>',
            'public/design-patterns.html'
        ],

        // Run some tasks in parallel to speed up the build process.
        concurrent: {
            dist: [
                'copy',
                'css',
                'jshint'
            ]
        },

        // Copy files.
        copy: {
            // Copy fonts.
            fonts: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= paths.src.fonts %>',
                        src: '**',
                        dest: '<%= paths.dest.fonts %>'
                    }
                ]
            },
            // Copy Textpattern branding assets.
            img: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/assets/img/',
                        src: '**',
                        dest: '<%= paths.dest.img %>com/'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/textpattern-branding/img/',
                        src: '**',
                        dest: '<%= paths.dest.img %>branding/'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/textpattern-branding/img/favicons/',
                        src: '**',
                        dest: 'public/'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/textpattern-branding/img/misc/',
                        src: ['hi.png', 'hi@2x.png'],
                        dest: 'public/'
                    }
                ]
            },
            // Copy mockups to mockups directory and design patterns doc to public (root) directory.
            html: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= paths.src.mockups %>',
                        src: '**',
                        dest: '<%= paths.dest.mockups %>'
                    },
                    {'public/design-patterns.html': 'src/docs/design-patterns.html'}
                ]
            },
        },

        // Check code quality of Gruntfile.js and site-specific JavaScript using JSHint.
        jshint: {
            options: {
                bitwise: true,
                browser: true,
                curly: true,
                eqeqeq: true,
                esversion: 6,
                forin: true,
                globals: {
                    createjs: true,
                    define: true,
                    module: true,
                    require: true,
                    Prism: true,
                    i: true
                },
                latedef: true,
                noarg: true,
                nonew: true,
                strict: false,
                undef: true,
                unused: false
            },
            files: [
                'Gruntfile.js',
                '<%= paths.src.js %>*.js',
                '!<%= paths.src.js %>*.min.js'
            ]
        },

        // Add vendor prefixed styles and other post-processing transformations.
        postcss: {
            options: {
                processors: [
                    require('autoprefixer'),
                    require('cssnano')
                ]
            },
            dist: {
                src: '<%= paths.dest.css %>*.css'
            }
        },

        // Generate filename timestamps and version numbers.
        replace: {
            theme: {
                options: {
                    patterns: [
                        {
                            match: 'timestamp',
                            replacement: '<%= opt.timestamp %>'
                        },
                        {
                            match: 'version',
                            replacement: '<%= pkg.version %>'
                        }
                    ]
                },
                files: [
                    // Copy Textpattern templates to themes directory.
                    {
                        expand: true,
                        cwd: '<%= paths.src.templates %>',
                        src: ['**', '!manifest.json'],
                        dest: '<%= paths.dest.templates %>'
                    },
                    // Generate version number automatically in theme manifest.json file.
                    {'<%= paths.dest.templates %>manifest.json': '<%= paths.src.templates %>manifest.json'}
                ]
            }
        },

        // Sass configuration.
        sass: {
            options: {
                implementation: require('sass'),
                outputStyle: 'expanded', // outputStyle = expanded, nested, compact or compressed.
                sourceMap: false
            },
            dist: {
                files: [
                    {'<%= paths.dest.css %>style.css': '<%= paths.src.sass %>style.scss'},
                    {'<%= paths.dest.css %>designpatterns.css': '<%= paths.src.sass %>designpatterns.scss'}
                ]
            }
        },

        // Validate CSS files via stylelint.
        stylelint: {
            options: {
                configFile: '.stylelintrc.yml'
            },
            src: ['<%= paths.src.sass %>**/*.{css,scss}']
        },

        // Minify and copy JavaScript files from `node_modules` and from `src/js/` to `public/assets/js/`.
        terser: {
            options: {
                ecma: 2015,
                compress: {
                    booleans_as_integers: true,
                    drop_console: true
                },
                format: {
                    comments: false
                }
            },
            dist: {
                files: [
                    {
                        '<%= paths.dest.js %>app.js': [
                            // Prism: Core.
                            'node_modules/prismjs/prism.js',
                            // Prism: Plugins.
                            'node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js',
                            // Prism: Additional languages.
                            'node_modules/prismjs/components/prism-markup-templating.js',
                            'node_modules/prismjs/components/prism-apacheconf.js',
                            'node_modules/prismjs/components/prism-bash.js',
                            'node_modules/prismjs/components/prism-markdown.js',
                            'node_modules/prismjs/components/prism-nginx.js',
                            'node_modules/prismjs/components/prism-php.js',
                            'node_modules/prismjs/components/prism-textile.js',
                            // Site-specific JavaScript.
                            '<%= paths.src.js %>main.js'
                        ],
                        '<%= paths.dest.js %>createjs.js': [
                            'node_modules/preloadjs/lib/preloadjs.js',
                            'node_modules/easeljs/lib/easeljs.js',
                            'node_modules/tweenjs/lib/tweenjs.js'
                        ],
                        '<%= paths.dest.js %>indexcanvas.js': ['<%= paths.src.js %>indexcanvas.js']
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
                files: '<%= paths.src.js %>*.js',
                tasks: [
                    'jshint',
                    'uglify'
                ]
            },
            html: {
                files: [
                    '<%= paths.src.mockups %>**',
                    '<%= paths.src.templates %>**',
                    'src/docs/design-patterns.html'
                ],
                tasks: 'replace'
            }
        }

    });

    // Register tasks.
    grunt.registerTask('build', ['clean', 'concurrent', 'replace', 'terser']);
    grunt.registerTask('css', ['stylelint', 'sass', 'postcss']);
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('travis', ['build']);
};
