const hopp = require('hopp')

exports.default =
  hopp([ './src/*.js' ])
    .babel({
      presets: ['babili'],
      sourceMaps: true
    })
    .dest('./dist')
