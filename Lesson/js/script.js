// Функції

// function declaration:

// function showMessage(name, city) {
//   console.log('Hello. My name is ' + name + '. I am from ' + city + '.');
// }

// showMessage('Nata', 'Kyiv');

// function expression:

// const sayHi = function () {
//   console.log('Hi');
// };

// sayHi();

// const userName = 'Ann';
// const sayHi = function () {
//   let message = 'Hi. My name is ';
//   console.log(message + userName);
// };

// sayHi();

// function sum(a, b) {
//   return a + b;
// }
// let result = sum(7, 8);
// console.log(result);

// // Виведення функції

// const a = function () {
//   c();
//   console.log('function a');
//   b();
// };

// const b = function () {
//   console.log('function b');
// };

// const c = function () {
//   console.log('function c');
// };

// a();

//Аргументи і rest

// const addName = function () {
//   console.log(arguments);
// };

// addName();

// const addName = function () {
//   const arg = Array.from(arguments);
//   console.log(arguments);
//   console.log(arg);
// };

// addName(1, 2, 3, 4, 5);

// const addName = function (...arg) {
//   console.log(arg);
// };

// addName(1, 2, 3, 4, 5);

// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// }
// function showOk() {
//   console.log('You say OK');
// }

// function showCancel() {
//   console.log('You say NO');
// }

// ask('Yes or No', showOk, showCancel);

// const hello = function (name) {
//   console.log(`Hello, ${name}`);
// };

// const searchName = function (callback) {
//   const name = 'Ivan';
//   callback(name);
// };

// searchName(hello);
