// Method chaining = chama um método após o outro em uma linha de código.

let username = window.prompt("Enter your username:");

// ------ SEM METHOD CHAINING ------

/*
username = username.trim();

let firstChar = username.charAt(0);
firstChar = firstChar.toUpperCase();

let lastChars = username.slice(1);
lastChars = lastChars.toLowerCase();

username = firstChar + lastChars;

console.log(username);
*/

// ------ COM METHOD CHAINING ------

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);