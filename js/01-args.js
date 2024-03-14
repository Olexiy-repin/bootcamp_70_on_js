/*
 * - Function expression
 * - Псевдомасив arguments и Array.from
 */

// Function declaration
// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(10, 20));

// Function expression
// const sum = function (a, b) {
//   return a + b;
// };

// console.log(sum(10, 20));

// function foo() {
//   console.log('arguments: ', arguments);

//   const args = Array.from(arguments);

//   console.log('args: ', args);

//   args.push(10);

//   console.log('args: ', args);

//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }

//   for (const arg of arguments) {
//     console.log(arg);
//   }
// }

// foo(12, 'Hello', true, null);

/*
? Напиши функцію add для складання довільної кількості аргументів (чисел)
*/

// function add() {
//   console.log(arguments);

//   let total = 0;

//   for (const arg of arguments) {
//     total += arg;
//   }

//   return total;
// }

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

/*
? Створіть функцію calculateAverage(), яка приймає довільну кількість числових аргументів
? та розраховує середнє арефметичне.
*/

// function calculateAverage() {
//   console.log(arguments);

//   let total = 0;

//   for (const arg of arguments) {
//     total += arg;
//   }

//   return total / arguments.length;
// }

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2
