function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

const car = new Car("Honda", "Accord");
car.price = "1000$" // we can use bracket notation car["price"] = "1000$"

// If we have special character property like "car-name", "car name", etc dot
// notation will not work we have to use the bracket notation to use the object.

// delete property.
delete Car.model; // delete Car["model"]