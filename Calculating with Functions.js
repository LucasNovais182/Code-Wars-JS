// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// Requirements:
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Divison should be integer division. For example, this should return 2, not 2.666666...:


function zero(arg) {
    let num = 0;
    if(!arg) {return num;}
    if(arg.symbol == "+") {return num + arg.param}
    if(arg.symbol == "-") {return num - arg.param}
    if(arg.symbol == "*") {return num * arg.param}
    if(arg.symbol == "/") {return Math.floor(num / arg.param)}
  }
  function one(arg) {
    let num = 1;
    if(!arg) {return num;}
    if(arg.symbol == "+") {return num + arg.param}
    if(arg.symbol == "-") {return num - arg.param}
    if(arg.symbol == "*") {return num * arg.param}
    if(arg.symbol == "/") {return Math.floor(num / arg.param)}
  }
  function two(arg) {
    let num = 2;
    if(!arg) {return num;}
    if(arg.symbol == "+") {return num + arg.param}
    if(arg.symbol == "-") {return num - arg.param}
    if(arg.symbol == "*") {return num * arg.param}
    if(arg.symbol == "/") {return Math.floor(num / arg.param)}
  }
  function three(arg) {
    let num = 3;
    if(!arg) {return num;}
    if(arg.symbol == "+") {return num + arg.param}
    if(arg.symbol == "-") {return num - arg.param}
    if(arg.symbol == "*") {return num * arg.param}
    if(arg.symbol == "/") {return Math.floor(num / arg.param)}
  }
  function four(arg) {
    let num = 4;
    if(!arg) {return num;}
    if(arg.symbol == "+") {return num + arg.param}
    if(arg.symbol == "-") {return num - arg.param}
    if(arg.symbol == "*") {return num * arg.param}
    if(arg.symbol == "/") {return Math.floor(num / arg.param)}
  }
  function five(arg) {
    let num = 5;
    if(!arg) {return num;}
    if(arg.symbol == "+") {return num + arg.param}
    if(arg.symbol == "-") {return num - arg.param}
    if(arg.symbol == "*") {return num * arg.param}
    if(arg.symbol == "/") {return Math.floor(num / arg.param)}
  }
  function six(arg) {
    let num = 6;
    if(!arg) {return num;}
    if(arg.symbol == "+") {return num + arg.param}
    if(arg.symbol == "-") {return num - arg.param}
    if(arg.symbol == "*") {return num * arg.param}
    if(arg.symbol == "/") {return Math.floor(num / arg.param)}
  }
  function seven(arg) {
    let num = 7;
    if(!arg) {return num;}
    if(arg.symbol == "+") {return num + arg.param}
    if(arg.symbol == "-") {return num - arg.param}
    if(arg.symbol == "*") {return num * arg.param}
    if(arg.symbol == "/") {return Math.floor(num / arg.param)}
  }
  function eight(arg) {
    let num = 8;
    if(!arg) {return num;}
    if(arg.symbol == "+") {return num + arg.param}
    if(arg.symbol == "-") {return num - arg.param}
    if(arg.symbol == "*") {return num * arg.param}
    if(arg.symbol == "/") {return Math.floor(num / arg.param)}
  }
  function nine(arg) {
    let num = 9;
    if(!arg) {return num;}
    if(arg.symbol == "+") {return num + arg.param}
    if(arg.symbol == "-") {return num - arg.param}
    if(arg.symbol == "*") {return num * arg.param}
    if(arg.symbol == "/") {return Math.floor(num / arg.param)}
  }
  
  function plus(arg) {
    if(typeof arg == "undefined") {return false;}
    let method = {param: arg, symbol: "+"}
    return method;
    }
  function minus(arg) {
    if(typeof arg == "undefined") {return false;}
    let method = {param: arg, symbol: "-"}
    return method;
    }
  function times(arg) {
    if(typeof arg == "undefined") {return false;}
    let method = {param: arg, symbol: "*"}
    return method;
    }
  function dividedBy(arg) {
    if(typeof arg == "undefined") {return false;}
    let method = {param: arg, symbol: "/"}
    return method;
    }