const pictures = [
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/0/700/460',
    alt: 'laptop',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1/700/460',
    alt: 'developer',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/10/700/460',
    alt: 'forest',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/100/700/460',
    alt: 'beach',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1000/700/460',
    alt: 'mountain',
  },
];

// const mainTitleEl = document.querySelector('.js-title');

// console.log(mainTitleEl);

// mainTitleEl.textContent = '<span>Gallery</span> title';
// mainTitleEl.innerHTML = '<span>Gallery</span> title';

/*
<li class="gallery-item">
  <a href="#">
    <img src="" alt="" width="" height="">
  </a>
</li>
*/

//? Функція для створення карточки createGalleryCard(cardInfo)
const createGalleryCard = pictureInfo => {
  return `
  <li class="gallery-item">
    <a href="#">
      <img src="${pictureInfo.url}" alt="${pictureInfo.alt}" width="${pictureInfo.width}" height="${pictureInfo.height}">
    </a>
  </li>
  `;
};

//? Створення масиву рядків із елементами
const cardsArr = pictures.map(picture => {
  return createGalleryCard(picture);
});

console.log(cardsArr);

//? Вставка елементів на сторінку
const galleryListEl = document.querySelector('.js-gallery');

// galleryListEl.innerHTML = cardsArr.join('');
galleryListEl.insertAdjacentHTML('beforeend', cardsArr.join(''));
