import { getImagesByQuery } from './js/pixabay-api';
import { createLightbox, gallerysTemplate } from './js/render-functions';

const refs = {
  form: document.querySelector('.form'),
  buttonInput: document.querySelector('.js-button-search'),
  inputSearch: document.querySelector('.js-input-search'),
  galleryList: document.querySelector('.gallery'),
};

export const { form, buttonInput, inputSearch, galleryList } = refs;

form.addEventListener('submit', e => {
  e.preventDefault();
  const usersSearchValue = e.target.elements['search-text'].value.trim();
  getImagesByQuery(usersSearchValue).then(images => {
    const markup = gallerysTemplate(images);
    galleryList.innerHTML = markup;
    createLightbox();
  })
  

  form.reset();
});
