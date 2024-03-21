/*
 * Метод find
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає перший елемент, що задовольняє умові або undefined
 */

// const numbers = [5, 15, 10, 20, 25];

// const number = numbers.find((el, idx, arr) => {
//   return el % 2 === 0;
// });

// console.log('numbers: ', numbers);
// console.log('number: ', number);

/*
 * -----------------------------
 */
const allCars = [
  { make: 'Honda', model: 'CR-V', type: 'suv', price: 24045 },
  { make: 'Honda', model: 'Accord', type: 'sedan', price: 22455 },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', price: 24195 },
  { make: 'Mazda', model: 'CX-9', type: 'suv', price: 31520 },
  { make: 'Toyota', model: '4Runner', type: 'suv', price: 34210 },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', price: 45560 },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', price: 24320 },
  { make: 'Ford', model: 'F-150', type: 'truck', price: 27110 },
  { make: 'Ford', model: 'Fusion', type: 'sedan', price: 22120 },
  { make: 'Ford', model: 'Explorer', type: 'suv', price: 31660 },
];

/*
? Шукаємо машину за моделлю
 */

// Повна версія
// const getCarByModel = (cars, model) => {
//   const carByModel = cars.find((el, idx, arr) => {
//     return el.model === model;
//   });

//   return carByModel || `${model} не знайдено!`;
// };

// console.log(getCarByModel(allCars, 'F-150'));
// console.log(getCarByModel(allCars, 'CX-9'));
// console.log(getCarByModel(allCars, 'Cayenne'));

// Скорочена версія
// const getCarByModel = (cars, model) => {
//   return cars.find(car => car.model === model) || `${model} не знайдено!`;
// };

// console.log(getCarByModel(allCars, 'F-150'));
// console.log(getCarByModel(allCars, 'CX-9'));
// console.log(getCarByModel(allCars, 'Cayenne'));

/*
? Шукаємо машину за типом кузова
 */

// Повна версія
// const getCarByType = (cars, type) => {
//   const carByType = cars.find((el, idx, arr) => {
//     return el.type === type;
//   });

//   return carByType || `${type} не знайдено!`;
// };

// console.log(getCarByType(allCars, 'sedan'));
// console.log(getCarByType(allCars, 'truck'));
// console.log(getCarByType(allCars, 'tank'));

// Скорочена версія
// const getCarByType = (cars, type) => {
//   return cars.find(car => car.type === type) || `${type} не знайдено!`;
// };

// console.log(getCarByType(allCars, 'sedan'));
// console.log(getCarByType(allCars, 'truck'));
// console.log(getCarByType(allCars, 'tank'));
