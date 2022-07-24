function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.greeting = function() {
        console.log(`${this.name} is ${this.age} years old.`)
    }
}

const person = new Car("David", 23, "male")

for (let key in person) {
    console.log(key, person[key]);
}

// fetch only properties not the methods
for (let key in person) {
    if (typeof person[key] !== 'function') console.log(key, person[key]);
}

// get keys
const keys = Object.keys(person); // [name, age, gender, greeting]

// fetch the value if property is available in the object
if ('age' in person) console.log(`${person.name} is ${person.age} years old.`)