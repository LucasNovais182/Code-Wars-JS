// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

function alphabetPosition(text) {
  text = text.toLowerCase().replace(/ /g, '').split('').join(' ')

  var position = [];
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  var numbers = "1234567890".split('')

  numbers.forEach((element, index) => {
    text = text.replace(new RegExp(element, 'g'), ' ')
  })

  alphabet.forEach((element, index) => {
    position[index] = index + 1
    text = text.replace(new RegExp(element, 'g'), position[index])
  })

  text = text.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, ' ');
  text = text.replace(/  /g, '')

  return text.trim() == '' ? '' : text
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition("The suns34et s534ets at 53twe5lve o' clock."));
console.log(alphabetPosition(" 5"));
