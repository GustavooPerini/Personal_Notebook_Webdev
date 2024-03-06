// .filter() = cria uma array nova filtrando alguns elementos


function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}

let numbers = [1, 2, 3, 4, 5, 6, 7];

let evenNum = numbers.filter(isEven);
let oddNum = numbers.filter(isOdd);

console.log(numbers);
console.log(evenNum);
console.log(oddNum);


function getShortWords(element){
    return element.length <= 6;
}

function getLongWords(element){
    return element.length > 6;
}

const words = ["apple", "orange", "coconut", "banana", "pomegranate"];

const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(words);
console.log(shortWords);
console.log(longWords);