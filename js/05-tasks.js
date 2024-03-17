/*
? Напиши скрипт, який для об'єкта user, послідовно:
? - додає поле mood зі значенням 'happy'
? - замінює значення hobby на 'skydiving'
? - замінює значення premium на false
? - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
*/

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = !user.premium;

// console.log(user);

// const userKeys = Object.keys(user);

// console.log(userKeys);

// for (const key of userKeys) {
//   console.log(`${key}: ${user[key]}`);
// }

//? Зведіть у квадрат кожен елемент цього об'єкта.

// const obj = { x: 2, y: 3, z: 4 };

// console.log(obj);

// const objKeys = Object.keys(obj);

// console.log(objKeys);

// for (const key of objKeys) {
//   obj[key] = obj[key] ** 2;
// }

// console.log(obj);

/*
? У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
? підсумовування всіх зарплат і збережіть результат у змінній sum.
? Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
*/

//* Через for...in
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// console.log(salaries);

// let sum = 0;

// for (const key in salaries) {
//   sum += salaries[key];
// }

// console.log(sum);

//* Через Object.keys() та for...of
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;

// console.log(salaries);

// const salariesKeys = Object.keys(salaries);

// console.log(salariesKeys);

// for (const key of salariesKeys) {
//   sum += salaries[key];
// }

// console.log(sum);

//* Через Object.values() та for...of
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

console.log(salaries);

const salariesValues = Object.values(salaries);

console.log(salariesValues);

for (const value of salariesValues) {
  sum += value;
}

console.log(sum);
