/*
 * Оператор switch
 */

/*
? Виконай рефакторинг коду задачі використовуючи switch.
?
? Якщо до дедлайну 0 днів - виведи рядок "Today"
? Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
? Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
? Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

// const daysUntilDeadline = 5;

// switch (daysUntilDeadline) {
//   case 0: {
//     console.log('Today');

//     break;
//   }

//   case 1: {
//     console.log('Tomorrow');

//     break;
//   }

//   case 2: {
//     console.log('Overmorrow');

//     break;
//   }

//   default: {
//     console.log('Date in the future');
//   }
// }

// if (daysUntilDeadline === 0) {
//   console.log('Today');
// } else if (daysUntilDeadline === 1) {
//   console.log('Tomorrow');
// } else if (daysUntilDeadline === 2) {
//   console.log('Overmorrow');
// } else {
//   console.log('Date in the future');
// }

/*
? Напиши скрипт вибору опції доставки товара.
? Опція зберігається в змінній option: 1 - самовивіз, 2 - кур'єр, 3 - пошта
?
? В змінну message записати повідомлення в залежності від опції.
? - 'Ви можете забрати товар завтра з 12:00 в нашому офісі'
? - 'Кур'єр доставить замовлення завтра з 9:00 до 18:00'
? - 'Посилку буде відправлено сьогодні'
? - 'Вам передзвонить менеджер'
 */

// const option = 2;
// let message = '';

// switch (option) {
//   case 1: {
//     message = 'Ви можете забрати товар завтра з 12:00 в нашому офісі';

//     break;
//   }

//   case 2: {
//     message = 'Кур`єр доставить замовлення завтра з 9:00 до 18:00';

//     break;
//   }

//   case 3: {
//     message = 'Посилку буде відправлено сьогодні';

//     break;
//   }

//   default: {
//     message = 'Вам передзвонить менеджер';
//   }
// }

// console.log(message);
