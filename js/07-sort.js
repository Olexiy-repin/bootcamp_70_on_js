/*
 * Метод toSorted
 *
 * - Свій порядок сортування чисел
 * - Свій порядок сортування рядків
 * - Сортування об'єктів
 *
 * За замовчуванням:
 * - сортує за зростанням
 * - приводить елементи до рядка і сортує за [Unicode](https://unicode-table.com/en/)
 */

// const numbers = [1, 9, 6, 2, 3];
// const sortedNumbers = numbers.toSorted();

// console.log('numbers: ', numbers);
// console.log('sortedNumbers: ', sortedNumbers);

// const letters = ['b', 'd', 'a', 'c'];
// const sortedLetters = letters.toSorted();

// console.log('letters: ', letters);
// console.log('sortedLetters: ', sortedLetters);

/*
 * compareFunction - функція порівняння (callback)
 * Елементи масиву сортуються відповідно до її значення, що повертається
 */

// const numbers = [1, 6, 2, 3, 9, 10, 22, 34];
// const sortedNumbers = numbers.toSorted((a, b) => {
//   return a - b;
// });

// console.log('numbers: ', numbers);
// console.log('sortedNumbers: ', sortedNumbers);

// const letters = ['b', 'd', 'a', 'c', 'X', 'Y', 'A'];
// const sortedLetters = letters.toSorted((a, b) => {
//   return a.localeCompare(b);
// });

// console.log('letters: ', letters);
// console.log('sortedLetters: ', sortedLetters);

// console.log('a'.localeCompare('b'));
// console.log('b'.localeCompare('a'));
// console.log('b'.localeCompare('b'));

/*
 * Сортування масиву об'єктів
 */

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

//? За ігровим часом
// const sortedByBestPlayers = players.toSorted((a, b) => {
//   return b.timePlayed - a.timePlayed;
// });

// console.table(sortedByBestPlayers);

// const sortedByWorstPlayers = players.toSorted((a, b) => {
//   return a.timePlayed - b.timePlayed;
// });

// console.table(sortedByWorstPlayers);

//? За першою літерою імені
// const byName = players.toSorted((a, b) => {
//   return a.name.localeCompare(b.name);
// });

// console.table(byName);
