const randomNumber = require('../random-number')

const translations = [
  "seaman",
  "able seaman",
  "bucko"
]

module.exports = translations[randomNumber.under(translations.length)]
