/*
? У змінній minutes лежить число від 0 до 59.
? Визначте, в яку чверть години потрапляє це число (у першу, другу, третю чи четверту).
? [0 до 15) - перша чверть години
? [15 до 30) - друга чверть години
? [30 до 45) - третя чверть години
? [45 до 60) - четверта чверть години
*/

// const minutes = 15;

// if (minutes >= 0 && minutes < 15) {
//   console.log('Перша чверть години.');
// } else if (minutes >= 15 && minutes < 30) {
//   console.log('Друга чверть години.');
// } else if (minutes >= 30 && minutes < 45) {
//   console.log('Третя чверть години.');
// } else if (minutes >= 45 && minutes < 60) {
//   console.log('Четверта чверть години.');
// } else {
//   console.log('Некоректне значення хвилин!');
// }

/*
?  Перепишіть код за допомогою однієї конструкції switch:
*/

// const number = Number(prompt('Введіть число між 0 та 3'));

// switch (number) {
//   case 0: {
//     alert('Ви ввели число 0');

//     break;
//   }

//   case 1: {
//     alert('Ви ввели число 1');

//     break;
//   }

//   case 2:
//   case 3: {
//     alert('Ви ввели число 2, а може й 3');

//     break;
//   }

//   default: {
//     alert('Ви ввели якесь інше число');
//   }
// }

// if (number === 0) {
//   alert('Ви ввели число 0');
// } else if (number === 1) {
//   alert('Ви ввели число 1');
// } else if (number === 2 || number === 3) {
//   alert('Ви ввели число 2, а може й 3');
// } else {
//   alert('Ви ввели якесь інше число');
// }

/*
? Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
? Для цього, користувач має бути:
? - другом
? - онлайн
? - без режима не турбувати
 */

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// let canOpenChat = isOnline && isFriend && !isDnd;

// console.log('Чи можна відкрити чат? ', canOpenChat);

/*
? Напиши скрипт перевірки підписки користувача при доступі до контента
? - Є три типа підписки: free, pro і vip.
? - Отримати доступ можуть тільки користувачі pro і vip
 */

// const sub = 'free';
// const canAccessContent = ;

// console.log('Чи є доступ до контенту?', canAccessContent);
