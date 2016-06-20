const randomNumber = require('../random-number')

const translations = [
  "ahoy",
  "avast"
]


module.exports = (word) => {
  if(word.toUpperCase() === "HELLO") {
    return translations[randomNumber.under(translations.length)]
  }
}
