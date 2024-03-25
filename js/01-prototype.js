/*
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей з hasOwnProperty()
 * - Ланцюжки прототипів
 */

// const objC = {
//   c: 'object C',
// };

// console.log('objC: ', objC);

// const objB = Object.create(objC);

// objB.b = 'object B';

// console.log('objB: ', objB);

// console.log(objB.b);
// console.log(objB.c);
// console.log(objB.hasOwnProperty);
// console.log(objB.test);

// const objA = Object.create(objB);

// objA.a = 'object A';

// console.log('objA: ', objA);

// console.log(objA.a);
// console.log(objA.b);
// console.log(objA.c);
// console.log(objA.hasOwnProperty);

// console.log(objA.hasOwnProperty('a'));
// console.log(objA.hasOwnProperty('b'));
// console.log(objA.hasOwnProperty('c'));

// for (const key in objA) {
//   if (objA.hasOwnProperty(key)) {
//     console.log(`key: ${key}, value: ${objA[key]}`);
//   }
// }

const animal = {
  legs: 4,
  eyes: 2,
  ears: 2,

  changeName(newName) {
    this.name = newName;
  },
};

const dog = Object.create(animal);

dog.name = 'Mango';
dog.color = 'black';

console.log(dog);

console.log(dog.name);
console.log(dog.legs);
dog.changeName('Lucille');
console.log(dog.name);

const cat = Object.create(animal);

cat.name = 'Poly';
cat.color = 'brown';

console.log(cat);

console.log(cat.name);
console.log(cat.legs);
cat.changeName('Hilda');
console.log(cat.name);

// const dog = {
//   name: 'Mango',
//   color: 'black',
//   legs: 4,
//   eyes: 2,
//   ears: 2,
// };

// const cat = {
//   name: 'Poly',
//   color: 'brown',
//   legs: 4,
//   eyes: 2,
//   ears: 2,
// };
