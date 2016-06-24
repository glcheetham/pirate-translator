'use strict'


// Applies some "pirate grammar" rules to translated words

module.exports = function(word) {
  if(word.match(/ing$/)) { // Changes endings of words from "ing" to "in'"
    return word.slice(0, -1) + "'"
  } else {
    return word
  }
}
