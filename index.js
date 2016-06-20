'use strict'
const wordHandlers = require('./word-handlers')

const input = "Hello there my wonderful seafaring friends."

const words = input.split(/\s/)

words.forEach(word => {
  let translation = word
  wordHandlers.forEach(handler => {
    translation = handler(word) || translation
  })
  console.log(translation)
})
