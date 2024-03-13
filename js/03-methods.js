/*
 * Методи масиву
 *
 * - join
 * - split (Метод рядка)
 * - slice
 * - concat
 * - indexOf
 * - push/pop
 */

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// const coursesString = courses.join(' ');

// console.log('courses: ', courses);
// console.log('coursesString: ', coursesString);

// console.log(coursesString.split(' '));

// const copyCorses = courses.slice(2, 4);

// console.log('courses: ', courses);
// console.log('copyCorses: ', copyCorses);

const oldCourses = ['HTML', 'CSS', 'JavaScript'];
const newCourses = ['React', 'PostgreSQL'];
const allCoruses = oldCourses.concat(newCourses);
const copyAllCourses = allCoruses.concat();

console.log('oldCourses: ', oldCourses);
console.log('newCourses: ', newCourses);
console.log('allCoruses: ', allCoruses);
console.log('copyAllCourses: ', copyAllCourses);

console.log(allCoruses === copyAllCourses);

console.log(allCoruses.indexOf('JavaScript'));

allCoruses.push('NodeJs', 'PHP');
console.log('allCoruses: ', allCoruses);

allCoruses.pop();
allCoruses.pop();
console.log('allCoruses: ', allCoruses);
