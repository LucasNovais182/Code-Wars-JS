// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
    return l.filter((valor) => {
        return Number.isInteger(valor) ? true : false;
    })
}

console.log(filter_list(["Lucas"]))
console.log(filter_list(["Lucas", 5, 4, "5"]))
console.log(filter_list(["Lucas", 5, '7', 7]))
