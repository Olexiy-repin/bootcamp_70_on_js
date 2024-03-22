/*
 * Контекст виконання функції
 *
 * - Ключове слово this
 * - Глобальний контекст
 * - Контекст методу об'єкта
 */

//* Розглянемо як this поводиться в методах
// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     console.log('This --->', this);
//   },

//   showName() {
//     console.log(this.name);
//   },
// };

// user.showThis();
// user.showName();

//* Розглянемо як this поводиться у звичайних функціях.
//? Function expression
// const greet = function () {
//   console.log('This --->', this);
// };

// greet();

//? Function declaration
// function greet() {
//   console.log('This --->', this);
// }

// greet();

//* Присвоєння функції як методу об'єкта
// const showThis = function () {
//   console.log('This --->', this);
// };

// showThis();

// const showName = function () {
//   console.log(`Hello ${this.name}`);
// };

// showName();

// const user = {
//   name: 'Luis',
//   age: 30,

//   showUserThis: showThis,
//   showUserName: showName,
// };

// user.showUserThis();
// user.showUserName();

// const anotherUser = {
//   name: 'Etta Burgess',
//   age: 40,

//   showAnotherUserThis: showThis,
//   showAnotherUserName: showName,
// };

// anotherUser.showAnotherUserThis();
// anotherUser.showAnotherUserName();

//* Виклик методу об'єкта без контексту
// const user = {
//   name: 'Luis',
//   age: 30,

//   showUserThis: function () {
//     console.log('This --->', this);
//   },

//   showUserName: function () {
//     console.log(this.name);
//   },
// };

// user.showUserThis(); // user
// user.showUserName(); // Luis

// const showThis = user.showUserThis;
// const showName = user.showUserName;

// showThis(); // undefined
// showName(); // Error

//* This в callback функціях
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

// someFunction(user.showThis);

//* This у стрілочних функціях. Стрілочні функції не мають свого this, this в стрілках завжди посилається на батьківський this.

// const user = {
//   name: 'Luis',
//   age: 30,

//   changeAge: newAge => {
//     console.log(`this ---->`, this);

//     this.age = newAge;
//   },
// };

// user.changeAge(40);
