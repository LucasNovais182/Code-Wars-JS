// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

// Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

function getSum(a, b) {
    if (a > b) {
        var resultado = a + b
        for (i = b + 1; i < a; i++) {
            resultado = resultado + i            
        }
        return resultado
    }else if (a < b) {
        var resultado = a + b
        for (i = a + 1; i < b; i++) {
            resultado = resultado + i            
        }
        return resultado
    }else if(a == b){
        return a
    }
}

console.log(getSum(4, 2))
console.log(getSum(78, 50))
console.log(getSum(-147, -166))
console.log(getSum(-569, -228))
console.log(getSum(40, 40))

