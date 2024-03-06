// constructor = um método especial que define as propriedades e métodos
//               de um objeto.


function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.onSale = true,
    this.drive = function(){console.log(`You drive the ${this.model}.`)}
}

const car1 = new Car("Ford", "Mustang", 2024, "Red");
const car2 = new Car("Chevrolet", "Camaro", 2024, "Yellow");
const car3 = new Car("Dodge", "Charger", 2024, "Blue");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
console.log(car1.onSale);
car1.drive();

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
console.log(car2.onSale);
car2.drive();

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);
console.log(car3.onSale);
car3.drive();