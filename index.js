'use strict'
const translator = require('./translator') // Translates individual words
const postprocessor = require('./postprocessor') // Post-processor for individual words

const input = "Hi I'm just testing my new pirate translator"

const words = input.split(/\s/)

words.forEach(word => {
  let translation = word
  translation = translator(word) || translation
  translation = postprocessor(translation)
  console.log(translation)
})
