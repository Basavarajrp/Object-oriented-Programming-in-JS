// // Hide the details, just show the essentials.

function Person(name, password, email) {

    this.name = name;
    this.password = password;
    this.email = email;

    //  create the local variable.
    let isActive = true;

    // local function.
    let validUser = function() {
        if (isActive = true) return true;
    }

    // can be accessed outside.
    this.greeting = function() {
        if (validUser) return `Welcome Back ${this.name}.`
    }

}

const person = new Person("David", "password", "abc@gmail.com")

// Accessing the public properites/methods:
console.log(person.name) // David
console.log(person.greeting()) // Welcome Back David.

// Accessing the private properties/methods:
console.log(person.isActive) // undefined
console.log(person.validUser()) // person.validUser is not a function