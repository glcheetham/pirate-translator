'use strict'
const fs = require('fs')
const path = require('path')

// return require() of the module in this directory, with the same name as "word", if it exists
// This should be the "translation" module which contains the translation for "word"

module.exports = function(word) {
  const translationPath = path.resolve(__dirname, './' + word.toLowerCase() + '.js')

  if(fs.existsSync(translationPath)) {
    return require(translationPath)
  } else {
    return word
  }
}
