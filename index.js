'use strict'
const translator = require('./translator') // Translates individual words
const postprocessor = require('./postprocessor') // Post-processor for individual words

module.exports = function(input) {
  const words = input.split(/\s/) // Split input around spaces
  let translated = ""

  words.forEach(word => {
    let translation = word.replace(/[\!\?\'\"]/, "") // Remove common punctuation from the string

    translation = translator(translation) || translation
    translation = postprocessor(translation)

    translated += translation + " "
  })

  // DODGY DODGY DODGY DODGY DODGY
  translated = translated.slice(0, -1) // Remove the last characted (hopefully space) from the end of the string
  return translated
}
