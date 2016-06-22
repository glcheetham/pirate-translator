'use strict'
const wordHandler = require('./word-handler')

const input = "Hello there my wonderful pirate friends"

const words = input.split(/\s/)

words.forEach(word => {
  let translation = word
  translation = wordHandler(word) || translation
  console.log(translation)
})
