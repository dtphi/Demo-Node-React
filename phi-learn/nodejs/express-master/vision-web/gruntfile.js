module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-jscoverage'); 
  grunt.loadNpmTasks('grunt-cafe-mocha');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-cucumber');
  grunt.loadNpmTasks('grunt-env');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.initConfig({
    env: {
      test: { NODE_ENV: 'TEST' },
      coverage: { NODE_ENV: 'COVERAGE' }
    },
    cucumberjs: {
      files: 'features',
      options: {
        steps: "features/step_definitions",
        format: "pretty"
      }
    },
    handlebars: {
      compile: {
        options: {
          namespace: "visiontemplates"
        },
        files: {
          "public/components/vision/templates.js": ["templates/*.hbs"]
        }
      }
    },
    cafemocha: {
      test: {
          src: 'test/*.js',
          options: {
              ui: 'bdd',
              reporter: 'spec',
          },
      },
      coverage: {
         src: 'test/*.js',
          options: {
            ui: 'bdd',
            reporter: 'html-cov',
            coverage: {
                output: 'coverage.html'
            }
          }
      },
    },
    jscoverage: {
      options: {
        inputDirectory: 'lib',
        outputDirectory: 'lib-cov',
        highlight: false
      }
    },
    uglify: {
      dist: {
          files: {
              'public/components/vision/templates.min.js': 'public/components/vision/templates.js',
              'public/components/vision/vision.min.js': 'public/components/vision/vision.js',
              'public/components/json2/json2.min.js': 'public/components/json2/json2.js',
              'public/components/handlebars/handlebars.runtime.min.js': 'public/components/handlebars/handlebars.runtime.js'
          }
      }
    },
    cssmin: {
      minify: {
        expand: true,
        src: ['public/components/vision/vision.css'],
        ext: '.min.css'
      }
    }
  });
  
  grunt.task.loadTasks("./tasks");
  grunt.registerTask('test', [  'drop', 'env:test','cafemocha:test' ]);
  grunt.registerTask('coverage', [ 'drop', 'env:coverage', 'jscoverage', 'cafemocha:coverage' ]);
};
