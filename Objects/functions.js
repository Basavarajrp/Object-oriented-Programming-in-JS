(function() { }).constructor === Function // returns true.


// What happens when we define the functions in JS
function Add(num1, num2) {
    this.num1 = num1,
        this.num2 = num2,
        this.add = function() { return this.num1 + this.num2 }
}

const addition = new Add(2, 4)
console.log(addition.add()) // 6

// The above function is created just like this internally
const Add = new Function("num1", "num2", `
    this.num1 = num1,
    this.num2 = num2,
    this.add = function () {return this.num1 + this.num2}
`);

const addition = new Add(2, 4)

console.log(addition.add()) // 6

// Methods that are available in our functions.

Add.call({}, 2, 4)

// The above expression is similar to "new Add(2, 4)", when we use new operator it interanlly creates the "{}" and pass them as the 1st argument to call method which determines the context of "this".

// As we discussed earlier if we don't use "new" operator then "this" will points to the global(window) object.
Add.call(window, 2, 4);

// apply: Same as above, but arguments are passed as the array.
Add.apply({}, [2, 4])