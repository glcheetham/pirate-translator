const randomNumber = require('../random-number')

const translations = [
  "yarr",
  "yar",
  "aye",
  "arr"
]


module.exports = translations[randomNumber.under(translations.length)]
