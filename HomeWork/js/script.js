// ЗАВДАННЯ 1
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
// if (age > 18) {
// return true;
// } else {
// return confirm('Батьки дозволили?');
// }
// }

// ВІДПОВІДЬ
// function checkAge(age) {
//   age > 18 ? true : confirm('Батьки дозволили?');
// }
// checkAge(14);

// ЗАВДАННЯ 2
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// ВІДПОВІДЬ
// const min = (a, b) => {
//   return console.log(Math.min(a, b));
// };
// min(1, 6);

// ЗАВДАННЯ 3
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
// if (confirm(question)) yes();
// else no();
// }
// ask(
// "Ви згодні?",
// function() { alert("Ви погодились."); },
// function() { alert("Ви скасували виконання."); }
// );

// const ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };
// ask(
//   'Ви згодні?',
//   () => alert('Ви погодились.'),
//   () => alert('Ви скасували виконання.'),
// );
