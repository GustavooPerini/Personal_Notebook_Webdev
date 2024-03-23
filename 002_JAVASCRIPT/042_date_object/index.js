const actualDate = new Date();
console.log(actualDate);

// se vc quiser uma data personalizada:
// Date(ano, mes, dia, hora, minuto, segundo, milisegundo);

const personalDate = new Date(2025, 1, 24, 16, 30, 12, 10);
console.log(personalDate);

//pegando alguns atributos do objeto que foi criado
const year = actualDate.getFullYear();
const month = actualDate.getMonth();
const day = actualDate.getDate();
const hour = actualDate.getHours();
const minutes = actualDate.getMinutes();
const seconds = actualDate.getSeconds();
const dayOfWeek = actualDate.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayOfWeek);

//mudando alguns atributos do objeto que foi criado
personalDate.setFullYear(2024);
personalDate.setMonth(0);
personalDate.setDate(2);
personalDate.setHours(17);
personalDate.setMinutes(42);
personalDate.setSeconds(30);

console.log(personalDate);

//comparando datas
if(actualDate > personalDate){
    console.log("A data atual é maior que a personalizada!");
}