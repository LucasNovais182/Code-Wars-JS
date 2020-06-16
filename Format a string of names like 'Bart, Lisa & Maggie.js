// https://www.codewars.com/kata/53368a47e38700bd8300030d/javascript

// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// returns 'Bart'

// list([])
// returns ''
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

function list(names){
    var nomes = []
    names.forEach((element, item) => {
        
        nomes.push(element.name)
    })
    
    var lastName
    nomes.length > 1 ? (
        lastName = nomes[nomes.length - 1].toString(),
        nomes.pop()
     ):(
         lastName
     )

    return lastName != undefined ? nomes.toString().replace(/,/g, ', ') + " & " + lastName : nomes.toString()

}

console.log(list([{name: "lucas"}, {name: "diego"}]))
console.log(list([{name: "lucas"}]))
console.log(list([]))
console.log(list([{name: "lucas"}, {name: "diego"}, {name: "Alberto"}]))
console.log(list([{name: "lucas"}, {name: "diego"}, {name: "Alberto"}, {name: "Gabriel"}]))