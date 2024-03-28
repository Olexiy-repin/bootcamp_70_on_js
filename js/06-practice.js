/*
? Реалізуй пошук автомобілів по сайту
? Користувач потрапляє на сайт і одразу бачить форму для пошуку і картки всіх автомобілів (масив cars)
? Користувач може ввести в форму назву Марки або Моделі авто і в тегу селект обрати що він ввів Марку або Модель (https://prnt.sc/PkkZZRy_ggtT)
? Після натискання кнопки пошуку (сабміт форми) відмалюй авто які збігаються з критеріями пошуку
 */

const allCars = [
  {
    id: 1,
    car: 'Audi',
    model: 'A6',
    price: 30000,
    img: 'https://static.wixstatic.com/media/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg/v1/fill/w_520,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg',
  },
  {
    id: 2,
    car: 'Honda',
    model: 'Civic',
    price: 12000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
  },
  {
    id: 3,
    car: 'Audi',
    model: 'Q7',
    price: 40000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
  },
  {
    id: 4,
    car: 'BMW',
    model: '5 siries',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
  },
  {
    id: 5,
    car: 'Honda',
    model: 'Accord',
    price: 20000,
    number: '+380000000000',
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
  },
  {
    id: 6,
    car: 'Volvo',
    model: 'XC60',
    price: 7000,
    img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
  },
];

/*
<li class="car-list-item">
  <img src="" alt="" class="car-list-img" />
  <div class="car-list-text-content">
    <h3 class="car-list-title"></h3>
    <p class="car-list-price"></p>
  </div>
</li>
*/

const elements = {
  form: document.querySelector('.js-form'),
  carList: document.querySelector('.js-list'),
};

const createCarCard = carInfo => {
  return `
  <li class="car-list-item">
    <img src="${carInfo.img}" alt="${carInfo.car} ${carInfo.model}" class="car-list-img" />
    <div class="car-list-text-content">
      <h3 class="car-list-title">${carInfo.car} ${carInfo.model}</h3>
      <p class="car-list-price">${carInfo.price}$</p>
    </div>
  </li>
  `;
};

const appendCards = cars => {
  const cardsTemplate = cars.map(car => createCarCard(car)).join('');

  elements.carList.innerHTML = cardsTemplate;
};

appendCards(allCars);

elements.form.addEventListener('submit', event => {
  event.preventDefault();

  const searchFormData = {
    query: elements.form.elements.query.value,
    options: elements.form.elements.options.value,
  };

  console.log(searchFormData);

  const currentCars = allCars
    .filter(carDetails => {
      return (
        carDetails.car.toLowerCase() === searchFormData.query.toLowerCase()
      );
    })
    .toSorted((a, b) => {
      return a[searchFormData.options].localeCompare(b[searchFormData.options]);
    });

  appendCards(currentCars);
});
