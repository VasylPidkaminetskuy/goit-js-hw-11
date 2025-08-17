import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = null;

export function createLightbox() {
  if (lightbox) {
    lightbox.refresh();
  } else {
    lightbox = new SimpleLightbox('.gallery a', {
      captions: true,
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
    });
  }
}

function createGallery({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<li class="gallery-item">
          <a class="gallery-item-link" href="${largeImageURL}"> <img class="gallery-item-img" src="${webformatURL}" alt="${tags}" /></a>
          <div class="gallery-description-container">
            <div class="gallery-img-info">
              <h5>Likes</h5>
              <p>${likes}</p>
            </div>

            <div class="gallery-img-info">
              <h5>Views</h5>
              <p>${views}</p>
            </div>

            <div class="gallery-img-info">
              <h5>Comments</h5>
              <p>${comments}</p>
            </div>

            <div class="gallery-img-info">
              <h5>Downloads</h5>
              <p>${downloads}</p>
            </div>
          </div>
        </li>`;
}
export function gallerysTemplate(images) {
  return images.map(createGallery).join('');
}

export function clearGallery() {}

export function showLoader() {}

export function hideLoader() {}
