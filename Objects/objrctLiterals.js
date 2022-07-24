// side note: instead of var use let if you want redefine later else use const if you don't want to redefine.


/*
curly brace refers to object literals for creating object.
*/
const addObj = {
    num1: 2, // property
    num2: 4, // property
    add: function() { return this.num1 + this.num2 } // method
}

console.log(addObj.add()) // 6