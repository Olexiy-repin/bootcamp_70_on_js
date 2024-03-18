/*
 * Синтаксис spread і rest
 *
 * - Залишкові параметри
 * - Збір частини аргументів
 * - Входження параметрів
 * - Створення масиву
 * - Створення об'єкта
 */

// const numbers = [12, 3, 4, 5];

// console.log(numbers);
// console.log(...numbers);

/*
? Пошук найменшої або найбільшої температури (числа)
*/
// const temps = [18, 14, 12, 21, 17, 29, 24];

// const minTemp = Math.min(...temps);
// const maxTemp = Math.max(...temps);

// console.log('temps: ', temps);
// console.log('minTemp: ', minTemp);
// console.log('maxTemp: ', maxTemp);

/*
? Створення масиву і тип за посиланням
*/
// const values = [23, 34, 4, 5];
// const copyValues = [...values];

// copyValues.push(10);

// console.log('values: ', values);
// console.log('copyValues: ', copyValues);

// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
// const b = _.cloneDeep(a);

// b[0].x = 10;

// console.log('a: ', a);
// console.log('b: ', b);

/*
? Поєднуємо кілька масивів в один через spread
*/
// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];

// console.log(allTemps);

/*
? Створення об'єкта
*/
// const objA = { x: 1, y: 2 };
// const objB = { x: 0, z: 3 };
// const objC = {
//   ...objA,
//   ...objB,
// };

// console.log('objA: ', objA);
// console.log('objB: ', objB);
// console.log('objC: ', objC);

/*
? Оновлюємо налаштування користувача
*/
// const defaultSettings = {
//   theme: 'light',
//   showNotifications: true,
//   hideSidebar: false,
// };

// const userSettings = {
//   showNotifications: false,
//   hideSidebar: true,
// };

// const finalSettings = {
//   ...defaultSettings,
//   ...userSettings,
// };

// console.log(finalSettings);

//? Напишіть функцію sum, яка складає довільну кількість аргументів
function sum(...args) {
  let total = 0;

  for (const arg of args) {
    total += arg;
  }

  return total;
}

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(10, 40, 60));
console.log(sum(10, 40, 60, 100, 200, 300, 4000, 5));
