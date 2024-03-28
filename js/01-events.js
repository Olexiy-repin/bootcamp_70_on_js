/*
 * Подія сlick
 *
 * - Іменування колбеків для слухачів
 * - handle*: handleSubjectEvent
 * - *Handler: subjectEventHandler
 * - on*: onSubjectEvent
 */

/*
? Натискаючи на кнопку "Click me" змусь
? червоний квадратик зміщуватись на 50px по діагоналі
*/

const btnEl = document.querySelector('.js-click');
const resetBtnEl = document.querySelector('.js-reset');
const boxEl = document.querySelector('.js-box');

let step = 0;

const onBtnElClick = () => {
  step += 50;

  if (step > 200) {
    btnEl.removeEventListener('click', onBtnElClick);

    return;
  }

  boxEl.style.transform = `translate(${step}px, ${step}px)`;
};

btnEl.addEventListener('click', onBtnElClick);

resetBtnEl.addEventListener('click', () => {
  step = 0;

  boxEl.style.transform = 'translate(0px, 0px)';

  btnEl.addEventListener('click', onBtnElClick);
});
