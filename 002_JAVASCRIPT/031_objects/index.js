/*

objects = uma coleção de propriedades e/ou métodos relacionados que
          definem um objeto da vida real (pessoas, produtos, lugares).

        object = {key: value,
                  function()}

*/

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hello, i am Spongebob!")},
    eat: () => console.log("I am eating a Krabby Patty."),
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

person1.sayHello();
person1.eat();

/* this = permite referenciar as propriedades dentro de um objeto. */

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 32,
  isEmployed: true,
  sayHello: function(){console.log(`Hello, my name is ${this.firstName} ${this.lastName}!`)},
  howOld: function(){console.log(`I am ${this.age} years old.`)},
}

person2.sayHello();
person2.howOld();

// this nao funciona com arrow function.