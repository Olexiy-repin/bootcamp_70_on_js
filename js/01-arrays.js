/*
 * Масиви
 *
 * - Створення масиву
 * - Доступ до елементів
 * - Перевизначення значення елемента
 * - Довжина масиву
 * - Індекс останнього елемента
 */
// ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL']

const cources = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

console.log(cources);

console.log(cources[10]);

cources[1] = 'NodeJs';

console.log(cources);

console.log(cources.length);

const firstElement = cources[0];

console.log(firstElement);

const lastElement = cources[cources.length - 1];

console.log(lastElement);

cources[10] = 'Hello!';

console.log(cources);
