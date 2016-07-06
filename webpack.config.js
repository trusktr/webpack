// Modules
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path')

/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.SME_ENV;

var isLocal = ENV === 'local';
var isTest = ENV === 'test';
var isDev = ENV === 'dev';
var isStaging = ENV === 'staging';
var isProd = ENV === 'prod';

//default to dev
if (!isStaging && !isProd && !isDev) isLocal = true;

var publicUrl = '';
if (isLocal) {
  var HOST = process.env.SME_HOST ? process.env.SME_HOST : "localhost";
  var PORT = process.env.SME_PORT ? process.env.SME_PORT : "8080";

  publicUrl = 'http://'+HOST+':'+PORT+'/';
  console.log ("publicURL " + publicUrl);
}


module.exports = function makeWebpackConfig () {
  /**
   * Config
   * Reference: http://webpack.github.io/docs/configuration.html
   * This is the object where all configuration gets set
   */
  var config = {
    resolve: {},
    resolveLoader: {}
  };

  // otherwise `npm link`ed modules can't be found properly
  // See: https://github.com/webpack/webpack/issues/811
  config.resolve.fallback = path.join(__dirname, "node_modules")
  config.resolveLoader.fallback = path.join(__dirname, "node_modules")

  /**
   * Entry
   * Reference: http://webpack.github.io/docs/configuration.html#entry
   * Should be an empty object if it's generating a test build
   * Karma will set this when it's a test build
   */
  config.entry = isTest ? {} : {
    app: [
      // set jquery as a global by loading it first here, otherwise angular
      // doesn't see it (how lame).
      // './src/lib/jquery.js',

      './src/app/index.js',
    ],
    // register: [ './src/register/index.js' ]
  };

  /**
   * Output
   * Reference: http://webpack.github.io/docs/configuration.html#output
   * Should be an empty object if it's generating a test build
   * Karma will handle setting it up for you when it's a test build
   */
  config.output = isTest ? {} : {
    // Absolute output directory
    path: __dirname + '/dist',

    // Output path from the view of the page
    // Uses webpack-dev-server in development
    publicPath: isLocal ? publicUrl : '/',

    // Filename for entry points
    // Only adds hash in build mode
    filename: isLocal ? '[name].bundle.js' : '[name].[hash].js',

    // Filename for non-entry points
    // Only adds hash in build mode
    chunkFilename: isLocal ? '[name].bundle.js' : '[name].[hash].js'
  };

  /**
   * Devtool
   * Reference: http://webpack.github.io/docs/configuration.html#devtool
   * Type of sourcemap to use per build type
   */
  if (isTest) {
    config.devtool = 'inline-source-map';
  } else if (isProd) {
    // omit
  } else {
    config.devtool = 'source-map';
  }

  /**
   * Loaders
   * Reference: http://webpack.github.io/docs/configuration.html#module-loaders
   * List: http://webpack.github.io/docs/list-of-loaders.html
   * This handles most of the magic responsible for converting modules
   */

  // Initialize module
  config.module = {
    preLoaders: [],
    loaders: [{
      // JS LOADER
      // Reference: https://github.com/babel/babel-loader
      // Transpile .js files using babel-loader
      // Compiles ES6 and ES7 into ES5 code
      test: /\.js$/,
      loader: 'babel!cssx',
      exclude: /node_modules/
    }, {
      // CSS LOADER
      // Reference: https://github.com/webpack/css-loader
      // Allow loading css through js
      //
      // Reference: https://github.com/postcss/postcss-loader
      // Postprocess your css with PostCSS plugins
      test: /\.css$/,
      // Reference: https://github.com/webpack/extract-text-webpack-plugin
      // Extract css files in production builds
      //
      // Reference: https://github.com/webpack/style-loader
      // Use style-loader in development.
      loader: isTest ? 'null' : ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
    }, {
      // ASSET LOADER
      // Reference: https://github.com/webpack/file-loader
      // Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
      // Rename the file using the asset hash
      // Pass along the updated reference to your code
      // You can add here any file extension you want to get copied to your output
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
      loader: 'file'
    }, {
      // Config for loading the font files specified by font-awesome, similar
      // to the previous file loader definition, but the regexes match the
      // version strings that font-awesome appends to the file paths (for
      // example, in the @font-face declarations of font-awesome.css). f.e.:
      // path/to/foo.ttf?v=4.6.1
      test: /\.(svg|woff|woff2|ttf|eot)\?v=\d+\.\d+\.\d+$/,
      loader: 'file'
    }, {
      // HTML LOADER
      // Reference: https://github.com/webpack/raw-loader
      // Allow loading html through js
      test: /\.html$/,
      loader: 'raw'
    }, {
      // JSON LOADER
      // Reference: https://github.com/webpack/json-loader
      // Allow loading JSON files through js
      test: /\.json$/,
      loader: 'json'
    }]
  };

  // ISPARTA LOADER
  // Reference: https://github.com/ColCh/isparta-instrumenter-loader
  // Instrument JS files with Isparta for subsequent code coverage reporting
  // Skips node_modules and files that end with .spec.js
  if (isTest) {
    config.module.preLoaders.push({
      test: /\.js$/,
      exclude: [
        /node_modules/,
        /\.spec\.js$/
      ],
      loader: 'isparta-instrumenter'
    });
  }

  /**
   * PostCSS
   * Reference: https://github.com/postcss/autoprefixer-core
   * Add vendor prefixes to your css
   */
  config.postcss = [
    autoprefixer({
      browsers: ['last 2 version']
    })
  ];

  /**
   * Plugins
   * Reference: http://webpack.github.io/docs/configuration.html#plugins
   * List: http://webpack.github.io/docs/list-of-plugins.html
   */
  config.plugins = [
    // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
    // Dedupe modules in the output
    new webpack.optimize.DedupePlugin(),
  ];

  // Skip rendering index.html in test mode
  if (!isTest) {
    // Reference: https://github.com/ampedandwired/html-webpack-plugin
    // Render index.html
    config.plugins.push(
      new HtmlWebpackPlugin({
        template: './src/public/welcome/index.html',
        filename: 'welcome/index.html',
        inject: 'body',
        chunks: ['app'],
      }),

      // new HtmlWebpackPlugin({
      //   template: './src/public/index.html',
      //   filename: 'index.html',
      //   inject: 'body',
      //   chunks: ['register'],
      // }),

      // Reference: https://github.com/webpack/extract-text-webpack-plugin
      // Extract css files
      // Disabled when in test mode or not in build mode
      new ExtractTextPlugin('[name].[hash].css', {disable: !isProd})
    );
  }

  // Add build specific plugins
  if (!isLocal) {
    config.plugins.push(
      // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
      // Only emit files when there are no errors
      new webpack.NoErrorsPlugin(),

      // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
      // Minify all javascript, switch loaders to minimizing mode
      new webpack.optimize.UglifyJsPlugin({
        exclude: [/app\..*\.js/i, /register\..*\.js/i] // won't work fine if uglify built sources
      }),

      // Copy assets from the public folder
      // Reference: https://github.com/kevlened/copy-webpack-plugin
      new CopyWebpackPlugin([{
        from: __dirname + '/src/public'
      }])
    );
  }

  /**
   * Dev server configuration
   * Reference: http://webpack.github.io/docs/configuration.html#devserver
   * Reference: http://webpack.github.io/docs/webpack-dev-server.html
   */
  config.devServer = {
    contentBase: './src/public',
    stats: 'minimal'
  };

  /**
   * Aliases
   */
  config.resolve.alias = {
    src: __dirname + '/src',
    app: 'src/app',

    // alias the config file based on ENV.
    config: isProd ? 'src/config/prod.json' : isStaging ? 'src/config/staging.json' : isDev ? 'src/config/dev.json' : 'src/config/local.json'
  };

  return config;
}();
