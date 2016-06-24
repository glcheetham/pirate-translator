const randomNumber = require('../random-number')

const translations = [
  "ahoy",
  "avast"
]

module.exports = translations[randomNumber.under(translations.length)]
