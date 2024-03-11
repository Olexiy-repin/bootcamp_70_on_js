/*
? Нормалізація рядка
?
? Напишіть код, який запитуватиме:
? 'Яка «офіційна» назва JavaScript?'
? Якщо користувач вводить ECMAScript,
? то показати: «Вірно!», інакше – відобразити: «Не знаєте? ECMAScript!»
*/

// const answer = 'ECMAScript'.toLowerCase();
// let userInput = prompt('Яка «офіційна» назва JavaScript?').toLowerCase().trim();

// switch (userInput) {
//   case answer: {
//     console.log('Вірно!');

//     break;
//   }

//   default: {
//     console.log('Не знаєте? ECMAScript!');
//   }
// }

/*
? Форматування посилання (endsWith)
?
? Напиши скрипт який перевіряє чи закінчується значення
?  змінної link символом /. Якщо ні, додай до кінця
?  значення link цей символ.
? Використовуй конструкцію if...else.
*/

// let link = 'https://my-site.com/about';

// if (!link.endsWith('/')) {
//   link += '/';
// }

// console.log(link);

/*
? Форматування посилання (includes та логічне «І»)
? Напиши скрипт який перевіряє чи закінчується значення
? змінної link символом /. Якщо ні, додай до кінця
? значення link цей символ, але тільки в тому випадку,
? якщо в link є підрядок "my-site".
? Використовуй конструкцію if...else або тернарний оператор.
*/

// let link = 'https://somesite.com/about';

// if (!link.endsWith('/') && link.includes('my-site')) {
//   link += '/';
// }

// console.log(link);

/*
? Пошук у рядку методом includes()
*/

// const blacklistedWord1 = 'spam';
// const blacklistedWord2 = 'sale';

// const string1 =
//   "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million!";

// const result1 =
//   string1.toLowerCase().includes(blacklistedWord1) ||
//   string1.toLowerCase().includes(blacklistedWord2);

// console.log('string1: ', string1);
// console.log('result1: ', result1);

// const string2 = "Biggest SALE this week, don't miss out!";

// const result2 =
//   string2.toLowerCase().includes(blacklistedWord1) ||
//   string2.toLowerCase().includes(blacklistedWord2);

// console.log('string2: ', string2);
// console.log('result2: ', result2);

// const string3 = '#fatlivesmatter advertising campaign';

// const result3 =
//   string3.toLowerCase().includes(blacklistedWord1) ||
//   string3.toLowerCase().includes(blacklistedWord2);

// console.log('string3: ', string3);
// console.log('result3: ', result3);
