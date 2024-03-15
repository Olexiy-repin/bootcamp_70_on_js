/*
 * Об'єкти
 *
 * - Створення об'єкта
 * - Доступ до властивостей через крапку
 * - Доступ до властивостей через квадратні дужки
 * - Вкладені властивості
 * - Доступ до вкладених властивостей
 * - Зміна значення властивостей
 * - Додавання властивостей
 */

const film = {
  title: 'Harry Potter',
  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  rating: 10,
  actors: ['Adeline Jenkins', 'Isaiah Clark', 'Marguerite Buchanan'],
  isAdult: false,
  translations: {
    en: 'https://en',
    ua: 'https://ua',
  },
};

console.log(film);

console.log(film.title);
console.log(film.actors);

const key = 'rating';

console.log(film[key]);
console.log(film['isAdult']);

console.log(film.translations.ua);

film.test = 20;

console.log(film);

film.rating = 9;

console.log(film);
