/*
 ? Автоматичне приведення типів
*/

// console.log(2 + 5 + '' + 1 + 0); // '710'
// console.log('' + 1 - 0); // 1
// console.log(true + false); // 1
// console.log(6 / '3'); // 2
// console.log('2' + '3'); // '23'
// console.log(4 + 5 + 'px'); // '9px'
// console.log('$' + 4 + 5); // '$45'
// console.log('4' - 2); // 2
// console.log('4px' - 2); // NaN
// console.log(7 / 0); // Infinity
// console.log('  -9  ' + 5); // '  -9  5'
// console.log(null + 1); // 1
// console.log(6 + true); // 7

/*
? Логічні оператори
*/

// console.log(true && 3); // 3
// console.log(false && 3); // false
// console.log(true && 4 && 'kiwi'); // 'kiwi'
// console.log(true && 0 && 'kiwi'); // 0
// console.log(true || 3); // true
// console.log(true || 3 || 4); // true
// console.log(true || false || 7); // true
// console.log(null || 2 || undefined); // 2
// console.log((1 && null && 2) > 0); // false
// console.log(null || (2 && 3) || 4); // 3

/*
? Визначення значення для зміної за замовчуванням.
?
? Попросіть користувача ввести імʼя та запишіть до змінної username.
? Якщо користувач нічого не ввів або відмінив prompt, то потрібно в змінну записати 'anonymous'.
*/

// const username = prompt('Введіть імʼя') || 'anonymous';

// console.log(username);

/*
? В змінній someNumber знаходться число. Виведіть кількість цифр у цьому числі.
*/

// const someNumber = 100;
// const stringRepresentation = String(someNumber);

// console.log(stringRepresentation.length);

/*
? Зробіть калькулятор, який знаходитиме площу та периметр квадрата.
?
? Створіть функцію calculateAreaOrPerimeterOfSquare(sideOfSquare, calculationTitle)
? В параметр sideOfSquare будуть передавати довжину сторони.
? В параметр calculationTitle будуть передавати назву обчислення, це може бути 'area' або 'perimeter'.
?
? Формула площі квадрата S=a*a.
? Формула периметра квадрата P=4a.
*/

// function calculateAreaOrPerimeterOfSquare(sideOfSquare, calculationTitle) {
//   switch (calculationTitle) {
//     case 'area': {
//       return sideOfSquare ** 2;
//     }

//     case 'perimeter': {
//       return 4 * sideOfSquare;
//     }
//   }
// }

// console.log(calculateAreaOrPerimeterOfSquare(6, 'area')); // 36
// console.log(calculateAreaOrPerimeterOfSquare(6, 'perimeter')); // 24
// console.log(calculateAreaOrPerimeterOfSquare(2, 'area')); // 4
// console.log(calculateAreaOrPerimeterOfSquare(2, 'perimeter')); // 8

/*
? Зробіть калькулятор, який знаходитиме площу та периметр прямокутника.
?
? Створіть функцію calculateAreaOrPerimeterOfRectangle(sideA, sideB, calculationTitle)
? В параметри sideA та sideB будуть передавати довжини сторін прямокутника.
? В параметр calculationTitle будуть передавати назву обчислення, це може бути 'area' або 'perimeter'.
?
? Формула площі прямокутника S=a*b.
? Формула периметра прямокутника P=2a+2b.
*/

// function calculateAreaOrPerimeterOfRectangle(sideA, sideB, calculationTitle) {
//   switch (calculationTitle) {
//     case 'area': {
//       return sideA * sideB;
//     }

//     case 'perimeter': {
//       return 2 * sideA + 2 * sideB;
//     }
//   }
// }

// console.log(calculateAreaOrPerimeterOfRectangle(4, 6, 'area')); // 24
// console.log(calculateAreaOrPerimeterOfRectangle(4, 6, 'perimeter')); // 20
// console.log(calculateAreaOrPerimeterOfRectangle(2, 12, 'area')); // 24
// console.log(calculateAreaOrPerimeterOfRectangle(2, 12, 'perimeter')); // 28

/*
? Виведіть у консоль усі числа у проміжку від 1 до 1000, сума першої та другої цифри яких дорівнює п'яти.
*/

// for (let i = 1; i <= 1000; i++) {
//   const stringRepresentation = String(i);

//   if (stringRepresentation.length >= 2) {
//     const total =
//       Number(stringRepresentation[0]) + Number(stringRepresentation[1]);

//     if (total === 5) {
//       console.log(i);
//     }
//   }
// }

/*
? У змінній someString знаходиться рядок. Переберіть та виведіть у консоль по черзі всі символи цього рядка.
*/

// const someString = 'Hello world!';

// for (let i = 0; i < someString.length; i++) {
//   console.log(someString[i]);
// }

/*
? Створіть функцію getCountOfEvenDigits(number), яка буде повертати кількість парних цифр в числі.
? В параметр number будуть передавати число.
*/

// function getCountOfEvenDigits(number) {
//   const stringRepresentation = String(number);

//   let countOfEvenDigits = 0;

//   for (let i = 0; i < stringRepresentation.length; i++) {
//     if (Number(stringRepresentation[i]) % 2 === 0) {
//       countOfEvenDigits++;
//     }
//   }

//   return countOfEvenDigits;
// }

// console.log(getCountOfEvenDigits(2456)); // 3
// console.log(getCountOfEvenDigits(146)); // 2
// console.log(getCountOfEvenDigits(12)); // 1
// console.log(getCountOfEvenDigits(1)); // 0

// Math.floor(Math.random() * (max - min + 1)) + min;

// 1 - 3
// console.log(Math.floor(Math.random() * (3 - 1 + 1)) + 1);

// 0.1 - 1
// 0.2 - 1
// 0.3 - 1
// 0.4 - 2
// 0.5 - 2
// 0.6 - 2
// 0.7 - 3
// 0.8 - 3
// 0.9 - 3
