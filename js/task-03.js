const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryListEl = document.querySelector('.gallery');
galleryListEl.style.display = 'flex';
galleryListEl.style.gap = '15px';
galleryListEl.style.listStyle = 'none';
galleryListEl.style.justifyContent = 'center';

const imageItem = images.map(item => {
  const galleryItemEl = document.createElement('li');
  galleryItemEl.style.height = '250px';
  galleryItemEl.style.width = '375px';
  galleryItemEl.style.overflow = 'hidden';
  
galleryItemEl.insertAdjacentHTML('afterbegin', 
`<img src=${item.url} alt=${item.alt} height=250>`);

  return galleryItemEl
});
galleryListEl.append(...imageItem);