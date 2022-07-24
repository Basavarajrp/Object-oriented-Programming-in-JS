// Constructor is the other way of creating the object.


// Constructor function
function AddObj(num1, num2) {
    this.num1 = num1,
        this.num2 = num2,
        this.add = function() { return this.num1 + this.num2 }
}

const addnumber = new AddObj(2, 4); // returns empty object({})
console.log(addnumber.add()) // 6

/*
 "this" in the above function is pointing to the add object. Because by default "this" points to the global object, if we are running the code in the browser then "this" points to the global object that is window object, in the node that is "{}" empty object.
To overide the above default behavior and to point "this" to our defined AddObj instead of the global object we need to use the "new" keyword.
Also we no need to return "this" from the above function, the "new" keyword returns for us.
If we return just the object from the function that is called the factory function.
If we use "this" keyword and use the "new" keyword then that is the constructor function.
If we use the constructor function then we should not avoid the "new" keyword, otherwise "this" will point to the global object insted of our custome defined object that is AddObj in our case.
If we want to create the object that takes the input then instead of using the object literals({}) make use of the functions.
*/

