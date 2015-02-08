module.exports = function(grunt) {

  // Project configuration.
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
        scripts: {
            files: './public/src/script.js',
            tasks: ['exec'],
            options: {
                //interrupt: true,
            },
        },
    },
    exec: {
        build: 'browserify -e public/src/script.js -t reactify -o public/build/bundle.js'
    }
});
  
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-exec');
};