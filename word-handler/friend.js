const randomNumber = require('../random-number')

const translations = [
  "seaman",
  "able seaman"
]

module.exports = translations[randomNumber.under(translations.length)]
