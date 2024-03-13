/*
? Напиши скрипт для обчислення площі прямокутника зі сторонами,
? значення яких зберігаються у змінній values у вигляді рядка.
? Значення гарантовано розділені пробілом.
 */

// const values = '8 11';
// const valuesArr = values.split(' ');

// console.log('values: ', values);
// console.log('valuesArr: ', valuesArr);

// const areaOfRectangle = Number(valuesArr[0]) * Number(valuesArr[1]);

// console.log(areaOfRectangle);

/*
? Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
*/

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for (const number of numbers) {
//   if (number % 2 === 0) {
//     total += number;
//   }
// }

// console.log(numbers);
// console.log(total);

/*
? Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
? У змінних names та phones зберігаються рядки імен та телефонних номерів,
? розділені комами. Порядковий номер імен та телефонів у рядках вказують на
? відповідність. Кількість імен та телефонів гарантовано однакова.
*/

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';
// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// console.log('names: ', names);
// console.log('namesArr: ', namesArr);
// console.log('phones: ', phones);
// console.log('phonesArr: ', phonesArr);

// for (let i = 0; i < phonesArr.length; i++) {
//   console.log(`${namesArr[i]} - ${phonesArr[i]}`);
// }

/*
? Напиши скрипт, який виводить у консоль усі слова рядка
? крім першого і останнього. Результуючий рядок не повинен починатися
? або закінчуватися символ пробілу.
? Скрипт повинен працювати для будь-якого рядка.
*/

// 1 Варіант
// const string = 'Welcome to the future';
// const wordsArr = string.split(' ');
// let resultString = '';

// console.log('string: ', string);
// console.log('wordsArr: ', wordsArr);

// for (let i = 1; i < wordsArr.length - 1; i++) {
//   // resultString = resultString + ' ' + wordsArr[i];
//   resultString += ` ${wordsArr[i]}`;
// }

// resultString = resultString.trim();

// console.log(resultString);

// 2 Варіант
// const string = 'Welcome to the future';
// const wordsArr = string.split(' ');

// console.log('string: ', string);
// console.log('wordsArr: ', wordsArr);

// const wordsArrCopy = wordsArr.slice(1, wordsArr.length - 1);

// console.log('wordsArrCopy: ', wordsArrCopy);

// const resultString = wordsArrCopy.join(' ');

// console.log('resultString: ', resultString);

/*
? Напиши скрипт, який «розгортає» рядок (зворотний порядок букв)
? та виводить її в консоль.
*/

// 1 Варіант
// const string = 'Welcome to the future';
// let reversedString = '';
// const charsArr = string.split('');

// console.log('string: ', string);
// console.log('charsArr: ', charsArr);

// for (let i = charsArr.length - 1; i >= 0; i--) {
//   reversedString += charsArr[i];
// }

// console.log(reversedString);

// 2 Варіант
// const string = 'Welcome to the future';
// let reversedString = '';

// console.log('string: ', string);

// for (let i = string.length - 1; i >= 0; i--) {
//   reversedString += string[i];
// }

// console.log(reversedString);

// 3 Варіант
// const string = 'Welcome to the future';
// let reversedString = string.split('').reverse().join('');

// console.log('string: ', string);
// console.log('reversedString: ', reversedString);

/*
? Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
? для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
*/

// const values = [17, -10, 94, -30, 1, 23, -20];
// let min = values[0];

// for (let i = 1; i < values.length; i++) {
//   if (values[i] < min) {
//     min = values[i];
//   }
// }

// console.log(min); // 1

/*
? У нас є декілько масивів із зарплатами працівників із різних відділів, потрібно порахувати загальну суму зарплат
*/

// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];
// let total = 0;
