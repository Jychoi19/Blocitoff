module.exports = function(grunt) {

    grunt.registerTask( 'default', [ 'clean',  'copy', 'hapi', 'watch'] );

    grunt.registerTask( 'build', [ 'clean', 'copy' ] );

    grunt.registerTask( 'run', [ 'hapi', 'watch' ]);

    grunt.initConfig({

        watch: {
            hapi: {
                files: [
                    './app/images/*.{png,jpg,jpeg,svg}',
                    './app/scripts/**/*.js',
                    './app/css/**/*.css',
                    './app/pages/**/*.html',
                    './app/templates/**/*.html',
                    'Gruntfile.js'
                ],
                tasks: [
                    'clean',
                    'copy'
                ],
                options: {
                    spawn: false
                }
            }
        },

        copy: {
            dist: {
                files: [{
                    expand: true,
                    src: [ './images/*.{png,jpg,jpeg}' ],
                    dest: './dist/images',
                    cwd: './app'
                }, {
                    expand: true,
                    src: [ './**/*.css' ],
                    dest: './dist/css',
                    cwd: './app/css'
                }, {
                    expand: true,
                    src: [ './**/*.html' ],
                    dest: './dist',
                    cwd: './app/pages'
                }, {
                    expand: true,
                    src: [ './**/*.html' ],
                    dest: './dist/templates',
                    cwd: './app/templates'
                }, {
                  expand: true,
                  src: [ './**/*.js' ],
                  dest: './dist/js',
                  cwd: './app/scripts'
                }]
            }
        },

        hapi: {
            custom_options: {
                options: {
                    server: require('path').resolve('./server'),
                    bases: {
                        '/dist': require('path').resolve('./dist/')
                    }
                }
            }
        },

        clean: ['./dist']
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-hapi');
};
