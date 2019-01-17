const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const sass = require('node-sass');

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        implementation: sass,
        sourceMap: false
      },
      dist: {
        files: {
          './dest/index.css': './src/style/index.sass'
        }
      }
    },
    babel: {
      options: {
        presets: ['env', 'react', 'flow'],
        plugins: [
          'transform-react-jsx',
          'transform-es2015-classes',
          'transform-es2015-spread',
          'transform-es2015-arrow-functions',
        ]
      },
      dist: {
        files: {
          './dest/index.js': './src/engine/index.js',
          './dest/**/*.js': './src/engine/**/*.js'
        }
      }
    },
    copy: {
      frame: {
        files: [
          {
            expand: true,
            cwd: 'src',
            src: ['index.html', 'configuration.js'],
            dest: './dest/'
          }
        ]
      }
    },
    browserify: {
      dist: {
        files: {
          './dest/index_browserify.js': './src/engine/index.js',
        },
        options: {
          transform: ['babelify']
        }
      }
    },
    webpack: {
      config: {
        entry: './src/engine/index.js',
        output: {
          filename: 'index_webpack.js',
          path: path.resolve(__dirname, 'dest')
        },
        mode: 'production',
        optimization: {
          minimizer: [new UglifyJsPlugin()]
        },
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: 'babel-loader'
            }
          ]
        }
      }
    },
    watch: {
      script: {
        files: ["./src/engine/*.js", "./src/engine/**/*.js"],
        tasks: ['browserify']
      },
      style: {
        files: './src/style/*.sass',
        tasks: ['sass']
      },
      frame: {
        files: './src/index.html',
        tasks: ['copy']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-webpack');

  grunt.registerTask('default', ['sass', 'copy', 'browserify']);
};

