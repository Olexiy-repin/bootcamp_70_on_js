/*
? Фільтрація за діапазоном
?
? Напишіть функцію filterRange(numbers, a, b), яка приймає масив numbers, 
? шукає в ньому елементи більші-рівні min та менші-рівні max і віддає масив цих елементів.
*/

// Повна версія
// const filterRange = (numbers, min, max) => {
//   return numbers.filter((el, idx, arr) => {
//     return el >= min && el <= max;
//   });
// };

// console.log([10, 20, 2, 3, 56, 4]);
// console.log(filterRange([10, 20, 2, 3, 56, 4], 3, 10));

// Скорочена версія
// const filterRange = (numbers, min, max) => {
//   return numbers.filter(num => num >= min && num <= max);
// };

// console.log([10, 20, 2, 3, 56, 4]);
// console.log(filterRange([10, 20, 2, 3, 56, 4], 3, 10));

//? Відфільтруйте масив на унікальні значення.

// 1 Варіант forEach() та includes
// const users = ['Andre', 'Lester', 'Andre', 'Lester', 'Louisa', 'Alex'];
// const filtredUsers = [];

// users.forEach(username => {
//   if (!filtredUsers.includes(username)) {
//     filtredUsers.push(username);
//   }
// });

// console.log(users);
// console.log(filtredUsers);

// 2 Варіант filter() та indexOf()
// Повна версія
// const users = ['Andre', 'Lester', 'Andre', 'Lester', 'Louisa', 'Alex'];
// const filtredUsers = users.filter((el, idx, arr) => {
//   return arr.indexOf(el) === idx;
// });

// console.log(users.indexOf('Andre'));

// Скорочена версія
// const users = ['Andre', 'Lester', 'Andre', 'Lester', 'Louisa', 'Alex'];
// const filtredUsers = users.filter((username, idx, arr) => {
//   return arr.indexOf(username) === idx;
// });

// console.log(users);
// console.log(filtredUsers);

//? Відфільтруйте масив з користувачами на унікальні значення.

// const allUsers = [
//   { firstName: 'Herbert', age: 25 },
//   { firstName: 'Herbert', age: 25 },
//   { firstName: 'Todd', age: 30 },
//   { firstName: 'Todd', age: 30 },
//   { firstName: 'Lida', age: 29 },
// ];
// const filtredUsers = [];

// allUsers.forEach(user => {
//   const currentUser = filtredUsers.find(el => el.firstName === user.firstName);

//   if (currentUser === undefined) {
//     filtredUsers.push(user);
//   }
// });

// console.log(allUsers);
// console.log(filtredUsers);

/*
? Відсортувати користувачів за віком
? 
? Напишіть функцію sortByAge(users), яка приймає масив обʼєктів з властивістю age і сортує їх по ньому.
*/

// Повна версія
// const allUsers = [
//   { firstName: 'Herbert', age: 25 },
//   { firstName: 'Todd', age: 30 },
//   { firstName: 'Lida', age: 29 },
// ];

// const sortByAge = users => {
//   return users.toSorted((a, b) => {
//     return a.age - b.age;
//   });
// };

// console.table(sortByAge(allUsers));

// Скорочена версія
// const allUsers = [
//   { firstName: 'Herbert', age: 25 },
//   { firstName: 'Todd', age: 30 },
//   { firstName: 'Lida', age: 29 },
// ];

// const sortByAge = users => users.toSorted((a, b) => a.age - b.age);

// console.table(sortByAge(allUsers));

/*
? Вирахувати середній вік
? Напишіть функцію getAverageAge(users), яка приймає масив об’єктів 
? з властивістю age та повертає середній вік.
*/

// Повна версія
// const allUsers = [
//   { firstName: 'Herbert', age: 25 },
//   { firstName: 'Todd', age: 30 },
//   { firstName: 'Lida', age: 29 },
// ];

// const getAverageAge = users => {
//   const totalAge = users.reduce((acc, el, idx, arr) => {
//     return acc + el.age;
//   }, 0);

//   return totalAge / users.length;
// };

// console.log(getAverageAge(allUsers)); // 28

// Скорочена версія
// const allUsers = [
//   { firstName: 'Herbert', age: 25 },
//   { firstName: 'Todd', age: 30 },
//   { firstName: 'Lida', age: 29 },
// ];

// const getAverageAge = users => {
//   const totalAge = users.reduce((acc, user) => acc + user.age, 0);

//   return totalAge / users.length;
// };

// console.log(getAverageAge(allUsers)); // 28

/*
? Напиши клас Storage який створює об'єкти для керування складом товарів.
? При виклику отримуватиме один аргумент - початковий масив товарів і
? записуватиме його у властивість items.
?
? Додай методи класу:
? - getItems() - повертає масив товарів.
? - addItem(item) - отримує новий товар і додає його до поточних.
? - removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.
 */

// class Storage {
//   constructor(itemsArr) {
//     // this = {}
//     this.items = itemsArr;
//     // return this
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(newItem) {
//     this.items.push(newItem);
//   }

//   removeItemWithFilter(item) {
//     this.items = this.items.filter(el => el !== item);
//   }

//   removeItemWithSplice(item) {
//     const idxOfItem = this.items.indexOf(item);

//     if (idxOfItem === -1) {
//       console.log(`${item} не знайдено!`);

//       return;
//     }

//     this.items.splice(idxOfItem, 1);
//   }
// }

// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// console.log(storage);

// console.log(storage.getItems()); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.log(storage.getItems()); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItemWithSplice('🍋');
// console.log(storage.getItems()); // [ '🍎', '🍇', '🍑', '🍌' ]

/*
? Напиши клас Notes, який управляє колекцією нотаток у властивості items.
? Нотатка це об'єкт із властивостями text та priority.
? Додай класу статичну властивість Priority, в якій зберігатиметься об'єкт із пріоритетами.
?
? {
? LOW: 'low',
? NORMAL: 'normal',
? HIGH: 'high'
? }
?
? Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).
*/

// class Notes {
//   static Priority = {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high',
//   };

//   constructor(initalValue) {
//     this.items = initalValue;
//   }

//   addNote(note) {
//     this.items.push(note);
//   }

//   removeNote(noteText) {
//     this.items = this.items.filter(note => note.text !== noteText);
//   }

//   updatePriority(noteText, newPriority) {
//     const note = this.items.find(el => {
//       return el.text.toLowerCase() === noteText.toLowerCase();
//     });

//     if (note === undefined) {
//       console.log(`${noteText} не знайдено!`);

//       return;
//     }

//     note.priority = newPriority;
//   }
// }

// const myNotes = new Notes([]);

// console.log(myNotes);

// myNotes.addNote({ text: 'Моя перша нотатка', priority: Notes.Priority.LOW });
// console.log(myNotes);

// myNotes.addNote({
//   text: 'Моя друга нотатка',
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes);

// myNotes.removeNote('Моя перша нотатка');
// console.log(myNotes);

// myNotes.updatePriority('Моя друга нотатка', Notes.Priority.HIGH);
// console.log(myNotes);
