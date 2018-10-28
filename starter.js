require('babel-polyfill');
require('babel-register')({
    presets: ['env'],
    plugins: ["transform-object-rest-spread", "transform-class-properties"]
})

module.exports = require('./Cards.js')
