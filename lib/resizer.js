var gm = require('gm');
var fs = require('fs');
var path = require('path');

var magick = function magick (src, dest, size, cb) {
  var target = path.join(dest, size + '.png');
  var one = fs.createWriteStream(target);
  gm(src)
  .resize(size, size)
  .stream('png')
  .pipe(one);

  one.on('error', cb);
  one.on('finish', cb);
};

module.exports.magick = magick;
