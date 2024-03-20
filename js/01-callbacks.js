/*
 * Функція зворотнього виклика (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */

// const fnA = function (message, callback) {
//   console.log(message);

//   console.log('callback: ', callback);

//   callback(20);
// };

// const fnB = function (number) {
//   console.log('Log during fnB execution ', number);
// };

// fnA('A message', fnB);

/*
? Функція calc(a, b, callback)
 */

// function calc(a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// }

// function add(valueA, valueB) {
//   return valueA + valueB;
// }

// function division(valueA, valueB) {
//   return valueA / valueB;
// }

// calc(2, 3, function (valueA, valueB) {
//   return valueA + valueB;
// });

// calc(12, 3, function (valueA, valueB) {
//   return valueA / valueB;
// });

// calc(5, 3, function (valueA, valueB) {
//   return valueA * valueB;
// });

/*
? Напишіть функцію each(array, callback), яка першим параметром очікує масив,
? а другим - функцію, яка застосовується до кожного елемента масиву. Функція
? each повинна повернути новий масив, елементами якого будуть
? результати виклику коллбека.
 */

function each(array, callback) {
  const newArray = [];

  for (const item of array) {
    newArray.push(callback(item));
  }

  return newArray;
}

console.log([64, 49, 36, 25, 16]);

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value * 2;
  })
);

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value - 10;
  })
);

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return Math.sqrt(value);
  })
);

console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.ceil(value);
  })
);

console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.floor(value);
  })
);
