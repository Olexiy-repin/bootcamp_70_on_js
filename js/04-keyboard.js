/*
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Властивості key та code
 */

// document.addEventListener('keydown', event => {
//   console.log(`key: ${event.key}, code: ${event.code}`);
// });

/*
 * Обробка комбінацій клавіш
 */

// document.addEventListener('keydown', event => {
//   if (event.shiftKey && event.code === 'KeyS') {
//     console.log('Shift + S');
//   }

//   if ((event.metaKey || event.ctrlKey) && event.code === 'KeyS') {
//     event.preventDefault();

//     console.log('Ctrl + S / Command + S');
//   }
// });
