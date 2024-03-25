/*
 * Наслідування класів
 *
 *  - extends
 *  - Конструктор дочірнього класу (super)
 *  - Методи дочірнього класу
 */

class Timer {
  constructor(deadline, rootSelector) {
    // this = {}
    this.deadline = deadline;
    this.rootSelector = rootSelector;
    this.daysEl = {};
    this.hoursEl = {};
    this.minutesEl = {};
    this.secondsEl = {};
    // return this
  }

  start() {
    console.log('Start');
  }

  stop() {
    console.log('Stop');
  }
}

class ProductTimer extends Timer {
  constructor(deadline, rootSelector, cssParams) {
    super(deadline, rootSelector);

    this.cssParams = cssParams;
  }
}

const productTimer = new ProductTimer('26.03.2024', '.product-timer', {
  color: 'black',
  fonstSize: '20px',
  backgroundColor: 'teal',
});

console.log(productTimer);

class UserTimer extends Timer {
  constructor(deadline, rootSelector) {
    super(deadline, rootSelector);
  }

  pause() {
    console.log('Pause!');
  }
}

const userTimer = new UserTimer('27.03.2024', '.user-timer');

console.log(userTimer);
