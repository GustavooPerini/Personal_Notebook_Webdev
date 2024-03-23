
const fruits = [{name: "apple", color:"red", calories: 95},
                {name: "orange", color:"orange", calories: 45},
                {name: "banana", color:"yellow", calories: 105},
                {name: "coconut", color:"white", calories: 159},
                {name: "pineapple", color:"yellow", calories: 37}];

console.log(fruits[0].name);
console.log(fruits);

fruits.push({name: "grapes", color: "purple", calories: 65});
console.log(fruits);

fruits.pop();
console.log(fruits);

/*fruits.splice(1,3); apaga os elementos nas posições de 1 a 3.
console.log(fruits);*/


// ---------- forEach() ----------
fruits.forEach(fruit => console.log(fruit.name));


// ---------- map() ----------
const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);

console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);


// ---------- filter() ----------
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

console.log(yellowFruits);
console.log(lowCalFruits);


// ---------- reduce() ----------
const maxCalFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ?
                                  fruit : max);

const minCalFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ?
                                  fruit : min);

console.log(maxCalFruit);
console.log(minCalFruit);