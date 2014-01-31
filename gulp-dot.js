module.exports = function(config) {
  'use strict';

  var stream = require('stream'),
      doT = require('dot'),
      gutil = require('gulp-util'),
      _ = require('lodash'),
      fs = require('fs'),
      Transform = stream.Transform,
      dot = new Transform({objectMode: true}),
      PluginError = gutil.PluginError;

  config = config || {};
  _.extend(config, {it: {}, def: {}});

  dot._transform = function(file, encoding, next) {
    var compiled, str;

    if (file.isStream()) {
      this.emit(
        'error', new PluginError('gulp-dot', 'Streaming not supported')
      );
    } else if (file.isNull()) {
      this.push(file); // pass along
      return next();
    }

    if (config.hasOwnProperty('layout')) {
      _.extend(config.def, {content: file.contents});
      str = fs.readFileSync(config.layout);
    } else {
      str = file.contents;
    }

    compiled = doT.template(
      str,
      null,
      config.def
    );
    file.path = gutil.replaceExtension(file.path, '.html');
    file.contents = new Buffer(compiled(config.it));
    this.push(file);
    next();
  };

  return dot;
};
