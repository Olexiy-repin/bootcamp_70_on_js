/*
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */

//* Функції це об'єкти зі своїми властивостями та методами
// const greet = function () {
//   console.log('Hello!');
// };

// console.dir(greet);

//? Викличте функцію showFullName у контексті об'єкта user

// const showFullName = function (message, num) {
//   console.log(`${message} ${this.firstName} ${this.lastName}`);
//   console.log(num);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// showFullName.call(user, 'Hi', 10);
// showFullName.apply(user, ['Hi', 10]);

//? Викличте функцію showFullName у контексті об'єкта anotherUser
// const anotherUser = {
//   firstName: 'Marvin',
//   lastName: 'Jordan',
//   age: 30,
// };

// showFullName.call(anotherUser, 'Welcome', 100);
// showFullName.apply(anotherUser, ['Welcome', 100]);

//? Викличте функцію changeColor в контексті різних обʼєктів
// const changeColor = function (color) {
//   console.log('changeColor -> this', this);

//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// changeColor.call(hat, 'yellow');

// console.log(hat);

// const sweater = {
//   color: 'green',
// };

// changeColor.call(sweater, 'red');

// console.log(sweater);

//? Створіть копію функції changeColor з привʼязаним контекстом
// const changeColor = function (color) {
//   console.log('changeColor -> this', this);

//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// const changeHatColor = changeColor.bind(hat);

// changeHatColor('yellow');

// console.log(hat);

// const sweater = {
//   color: 'green',
// };

// const chageSweaterColor = changeColor.bind(sweater);

// chageSweaterColor('red');

// console.log(sweater);

//? Передайте метод обʼєкта в якості callback функції

// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis: function () {
//     console.log('This --->', this);
//   },

//   showName: function () {
//     console.log(this.name);
//   },
// };

// const someFunction = callback => {
//   callback();
// };

// someFunction(user.showName.bind(user));
