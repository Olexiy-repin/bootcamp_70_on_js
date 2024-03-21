/*
 * Метод reduce
 *
 * - Поелементно перебирає оригінальний масив
 * - Значення, що повертається, залежить від розробника
 */

// const numbers = [5, 10, 15, 20, 25];

/*
1 Ітерація

acc = 0
el = 5
idx = 0
arr = [5, 10, 15, 20, 25];

return 0 + 5

2 Ітерація

acc = 5
el = 10
idx = 1
arr = [5, 10, 15, 20, 25];

return 5 + 10

3 Ітерація

acc = 15
el = 15
idx = 2
arr = [5, 10, 15, 20, 25];

return 15 + 15

4 Ітерація

acc = 30
el = 20
idx = 3
arr = [5, 10, 15, 20, 25];

return 30 + 20

5 Ітерація

acc = 50
el = 25
idx = 4
arr = [5, 10, 15, 20, 25];

return 50 + 25
*/

// const total = numbers.reduce((acc, el, idx, arr) => {
//   return acc + el;
// }, 0);

// console.log(total);

/*
? Рахуємо загальну зарплату
 */

// Повна версія
// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const salaryValues = Object.values(salary);

/*
1 Ітерація

acc = 100
el = 50
idx = 1
arr = [100, 50, 150]

return 100 + 50

2 Ітерація

acc = 150
el = 150
idx = 2
arr = [100, 50, 150]

return 150 + 150
*/

// const totalSalary = salaryValues.reduce((acc, el, idx, arr) => {
//   return acc + el;
// });

// console.log(totalSalary);

// Скорочена версія
// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const salaryValues = Object.values(salary);

// const totalSalary = salaryValues.reduce((acc, salary) => acc + salary);

// console.log(totalSalary);
/*
? Рахуємо загальну кількість годин
 */

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

/*
1 Ітерація

acc = 0
el = { id: 'player-1', name: 'Mango', timePlayed: 310, online: false }
idx = 0
arr = []

return 0 + 310

2 Ітерація

acc = 310
el = { id: 'player-2', name: 'Poly', timePlayed: 470, online: true }
idx = 1
arr = []

return 310 + 470

3 Ітерація

acc = 780
el = { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true }
idx = 2
arr = []

return 780 + 230

*/

// Повна версія
// const totalTimePlayed = players.reduce((acc, el, idx, arr) => {
//   return acc + el.timePlayed;
// }, 0);

// console.log(totalTimePlayed);

// Скорочена версія
// const totalTimePlayed = players.reduce((acc, player) => acc + player.timePlayed, 0);

// console.log(totalTimePlayed);

/*
? Рахуємо загальну суму товарів кошика
 */

// Повна версія
// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemons', price: 70, quantity: 4 },
// ];

/*
1 Ітерація

acc = 0
el = { label: 'Apples', price: 100, quantity: 2 }
idx = 0
arr = [{}, {}, {}]

return 0 + 100 * 2

2 Ітерація

acc = 200
el = { label: 'Bananas', price: 120, quantity: 3 }
idx = 1
arr = [{}, {}, {}]

return 200 + 120 * 3

3 Ітерація

acc = 560
el = { label: 'Lemons', price: 70, quantity: 4 }
idx = 2
arr = [{}, {}, {}]

return 560 + 70 * 4
*/

// const totalAmount = cart.reduce((acc, el, idx, arr) => {
//   return acc + el.price * el.quantity;
// }, 0);

// console.log(totalAmount);

// Скорочена версія
// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemons', price: 70, quantity: 4 },
// ];

// const totalAmount = cart.reduce((acc, cartItem) => acc + cartItem.price * cartItem.quantity, 0);

// console.log(totalAmount);
