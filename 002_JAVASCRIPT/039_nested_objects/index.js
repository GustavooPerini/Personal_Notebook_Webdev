// nested objects = um objeto dentro de um objeto


const person = {
    fullName: "Spongebob Squarepants",
    age: 30, 
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address: {
        street: "124 Conch St.",
        city: "Bikini Bottom",
        coutry: "Int. Water",
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies);

/*console.log(person1.address.street);
console.log(person1.address.city);
console.log(person1.address.coutry);*/

for(const property in person.address){
    console.log(person.address[property]);
}

//OUTRO EXEMPLO UTILIZANDO CLASSES

class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street, city, coutry){
        this.street = street;
        this.city = city;
        this.coutry = coutry;
    }
}

const person1 = new Person("Spongebob", 30, "124 Conch St.", "Bikini Bottom", "Int. Water");
const person2 = new Person("Patrick", 34, "126 Conch St.", "Bikini Bottom", "Int. Water");


console.log(person2.name);
console.log(person2.age);
console.log(person2.address.street);
console.log(person2.address.city);
console.log(person2.address.coutry);