const randomNumber = require('../random-number')

const translations = [
  "yarr",
  "yar",
  "aye"
]


module.exports = translations[randomNumber.under(translations.length)]
