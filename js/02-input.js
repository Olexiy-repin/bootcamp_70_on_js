/*
 * - Подія input
 * - Подія blur
 * - Подія change
 */

const userNameEl = document.querySelector('.js-user-name');
const checkboxPolicyEl = document.querySelector('.js-policy-checkbox');

/*
? Виводь в консоль все що користувач вводить в input
*/

// userNameEl.addEventListener('input', () => {
//   console.log(userNameEl.value);
// });

/*
? Користувач вводить в input своє ім'я після втрати
? фокусу отримує alert з повідомленням-привітанням
 */

// userNameEl.addEventListener('blur', () => {
//   const firstName = userNameEl.value;

//   alert(`Welcome ${firstName}!`);
// });

// userNameEl.addEventListener('change', () => {
//   const firstName = userNameEl.value;

//   alert(`Welcome ${firstName}!`);
// });

/*
? Після того, як користувач активує чекбокс, виводиться alert
*/

// checkboxPolicyEl.addEventListener('change', () => {
//   if (checkboxPolicyEl.checked) {
//     alert('Done!');
//   }
// });
