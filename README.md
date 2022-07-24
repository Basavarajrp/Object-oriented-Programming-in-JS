# Why we need object oriented programming:question:

Before understanding the object oriented programming we need to understand the procedural programming.

    In the procedural programming data will be stored in bunch of variables seperately and the functions will operate on this data to get the desired output. Here the the data and the functions are decoupled seperately.

    Maintaining the procedural code is quite difficult, as the project grows we will be ending up with multiple functions having same line of code/logic in mutiple places. Also if we try to change the one funtion other function may also get effected.

How the objecte oriented programming helps to solve this proble:question:

    In object oriented programming we combine group of related variable and the functions together. This will form the single object.

    The object contains the properties(variables) and the methods(functions).

    In single world objects are nothing but a group of properties(variables) and the methods(functions) that are related to each other.

    
### Procedural programming:
```javascript
let name = "Carry";
let profession = "Doctor";

function employeeIntroduction() {
    return `${name} is a ${profession}.`
}

console.log(employeeIntroduction()) // Carry is a Doctor.
```

### Object oriented programming:
```javascript
let employee = {
    name: "Carry",
    profession: "Doctor",
    employeeIntroduction: function () {
        console.log(`${this.name} is a ${this.profession}.`)
    }
}

employee.employeeIntroduction() // Carry is a Doctor. 
```
In the object oriented way we can model all the properties and the methods that are related to each other in single object together.

# Four Pillars of object oriented programming:
- ## Encapsulation
- ## Abstraction
    Abstraction is way of hiding the implementation details and only showing the functionality to the outside world.
  
  This will helps us to hide some of the properties and methods from the outside and give couple of benefits:

      Simple interface: We can hide properties and methods that are not necessary for the outside world instead we can give access to particular methods and properties to make the usage simpler.

      Reduce the impact of changes: If we change the inner properties and methods inside the object which are not accessed outside then non of these changes will impact the rest of the other code.
- ## Inheritance

    Inheritance will helps us to use and extend the existing functionality and add more features without rewritting the entire code from scratch.
- ## Polymorphism
        Poly: means "Many"
      morphism: means "Form"

  Ploymorphism helps us to use the single piece of code multiple times in different forms based upon different object parameters.


