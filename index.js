'use strict'
const translator = require('./translator') // Translates individual words
const postprocessor = require('./postprocessor') // Post-processor for individual words

const input = "Hi! I'm just testing my new pirate translator"

const words = input.split(/\s/) // Split input around spaces

words.forEach(word => {
  let translation = word.replace(/[\!\?\'\"]/, "") // Remove common punctuation from the string
  
  translation = translator(translation) || translation
  translation = postprocessor(translation)
  console.log(translation)
})
