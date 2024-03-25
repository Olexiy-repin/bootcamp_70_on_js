/*
 * Класи
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */

//* Функція конструктор
// function User(firstName, lastName, age, login, password) {
//   // this = {};
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.login = login;
//   this.password = password;
//   // return this;
// }

// User.prototype.changeAge = function (newAge) {
//   this.age = newAge;
// };

// console.dir(User);

// const user1 = new User('Oleksii', 'Repin', 30, 'itu@zajzi.gy', 'qwerty123');

// console.log(user1);

// user1.changeAge(25);

// console.log(user1);

// const user2 = new User('Troy', 'Huff', 20, 'rak@jemu.ye', '123qwerty123');

// console.log(user2);

// user2.changeAge(40);

// console.log(user2);

//* Клас
// class User {
//   #password;
//   #login;

//   static test = 5;

//   constructor(firstName, lastName, age, login, password) {
//     // this = {}
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.#login = login;
//     this.#password = password;
//     // return this
//   }

//   get password() {
//     return this.#password;
//   }

//   set password(newPassword) {
//     this.#password = newPassword;
//   }

//   changeAge(newAge) {
//     this.age = newAge;
//   }
// }

// const user1 = new User('Oleksii', 'Repin', 30, 'jic@noalubu.yt', 'qwerty123');

// console.log(user1);

// console.log(user1.password);

// user1.password = '123456';

// console.log(user1.password);

// console.log(User.test);

// const user2 = new User('Eva', 'Lynch', 20, 'nobmak@ceju.bi', '123qwerty123');

// console.log(user2);

// user2.changeAge(25);

// console.log(user2);

// console.log(user2.firstName);

// class OwnMath {
//   static Pi = 3.14;

//   static sum(a, b) {
//     return a + b;
//   }

//   static division(a, b) {
//     return a / b;
//   }

//   static multi(a, b) {
//     return a * b;
//   }
// }

// console.log(OwnMath.sum(10, 20));

// console.log(Math);
