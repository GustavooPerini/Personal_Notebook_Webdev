// ES6 modules = parecido com um TAD. Basicamente, voce cria uma biblioteca

import {PI, getCircunference, getArea, getVolume} from "./mathUtil.js";

console.log(PI);

const circuference = getCircunference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(circuference.toFixed(2));
console.log(area.toFixed(2));
console.log(volume.toFixed(2));