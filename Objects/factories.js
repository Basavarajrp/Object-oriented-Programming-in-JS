/*
If we want to create the multiple addObj we need to duplicate the same logic multiple times. 
*/
const addObj1 = {
    num1: 2,
    num2: 4,
    add: function() {
        return this.num1 + this.num2
    }
}

const addObj2 = {
    num1: 4,
    num2: 6,
    add: function() {
        return this.num1 + this.num2
    }
}


/* To avoid the duplicatio of code we can make use of factory function which returns the object. */

// Factory function:
function addObj(num1, num2) {
    return {
        num1,
        num2,
        add: function() { return num1 + num2 }
    }
}

console.log(addObj(2, 4)) // { num1: 2, num2: 4, add: [Function: add] }

console.log(addObj(2, 4).add())  // 6



