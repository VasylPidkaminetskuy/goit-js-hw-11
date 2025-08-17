import axios from 'axios';

export function getImagesByQuery(query) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '51801427-6d1e83aadfb04e423248c71b3',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: 18,
      },
    })
    .then(res => res.data.hits);
}



