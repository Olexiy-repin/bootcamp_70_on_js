/*
 * Об'єкти
 *
 * - Тип даних за посиланням
 * - Масиви і функції - це об'єкти
 */

const user = {
  firstName: 'Oleksii',
  lastName: 'Repin',
};

const userCopy = user;

console.log('user: ', user);
console.log('userCopy: ', userCopy);

userCopy.age = 40;

console.log('user: ', user);
console.log('userCopy: ', userCopy);

console.log(['Hello', 'World', '!']);

const greeting = function () {
  console.log('Hello');
};

greeting.test = 10;

console.dir(greeting);

console.log(greeting.test);
