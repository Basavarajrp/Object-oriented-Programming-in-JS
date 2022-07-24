let x = 10;
let y = x;

x = 20

console.log(x) // returns 20
console.log(y) // returns 10

// ________________________________________

let a = { value: 10 }
let b = a

a.value = 20

console.log(a.value) // returns {value: 20}
console.log(b.value) // returns {value: 20}

// _________________________________________

let number = 10;
function increase(number) { return number + 1; }

increase(number);
console.log(number) // returns 10, still global value is not changed.

console.log(increase(number)) // 11 returned by the function.

// __________________________________________

let obj = { value: 10 };
function increase(obj) { return obj.value++; }

increase(obj);
console.log(obj) // 11.let x = 10;
let y = x;

x = 20

console.log(x) // returns 20
console.log(y) // returns 10

// ________________________________________

let a = { value: 10 }
let b = a

a.value = 20

console.log(a.value) // returns {value: 20}
console.log(b.value) // returns {value: 20}

// _________________________________________

let number = 10;
function increase(number) { return number + 1; }

increase(number);
console.log(number) // returns 10, still global value is not changed.

console.log(increase(number)) // 11 returned by the function.

// __________________________________________

let obj = { value: 10 };
function increase(obj) { return obj.value++; }

increase(obj);
console.log(obj) // 11.

// ___________________________________________

const mycar = {
    brand: "Honda",
    model: "Accord",
    year: 1998
};

function myFunc(theObject) {
    theObject.brand = "Toyota";
}

myFunc(mycar);

console.log(mycar.brand); // returns Toyota because the objects are mutable.