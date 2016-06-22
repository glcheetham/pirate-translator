module.exports = function(word) {
  try {
    return require('./' + word) || word
  } catch(e) {
    return word
  }
}
