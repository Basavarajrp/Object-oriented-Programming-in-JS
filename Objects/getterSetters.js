// Hide the details, just show the essentials.

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

// In the above example we made isActive as the private, but what if we want to make use of these property outside the object in other parts of application without modifying it.

// setters and getters.
function Person1(name, password, email) {

    this.name = name;
    this.password = password;
    this.email = email;

    //  create the local variable.
    let isActive = true;

    // local function.
    let validUser = function() {
        if (isActive = true) return true;
    }

    // getter function
    this.getPersonStatus = function() { return isActive };

    // can be accessed outside.
    this.greeting = function() {
        if (validUser) return `Welcome Back ${this.name}.`
    };

}

const person = new Person1("David", "password", "abc@gmail.com")

console.log(person.getPersonStatus()) // true

// In the above example what if we want to access the property just like "person.getPersonStatus" instaed of the function way.

function Person2(name, password, email, role) {

    this.name = name;
    this.password = password;
    this.email = email;
    this.role = role;

    //  create the local variable.
    let isActive = true;

    // local function.
    let validUser = function() {
        return isActive ? true : false;
    }

    // getter function
    this.getPersonStatus = function() { return isActive };

    // can be accessed outside.
    this.greeting = function() {
        if (validUser) return `Welcome Back ${this.name}.`
    };

    // another way of getter/read-only-property.
    Object.defineProperty(this, "userStatus", {
        get: function() { return isActive ? true : false; },
        set: function(value) {
            if (this.role == "admin") {
                isActive = value
            } else {
                throw new Error("Not Allowed!")
            }

        }
    })

}

// Admin
const admin = new Person2("David", "password", "abc@gmail.com", "admin")
console.log(admin.userStatus) // true
admin.userStatus = false;     // sets the value if your are admin.
console.log(admin.userStatus) // false

// User
const user = new Person2("David", "password", "abc@gmail.com", "user")
console.log(user.userStatus) // true
user.userStatus = false;     // Error: Not Allowed!

