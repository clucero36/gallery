import { fetchCategoryImages } from './api';
import data from './data';

export const ArrayFiller = async (input) => {
  const imageData = data.media;
  let images = [];

  if (input !== '') {
    const data = await fetchCategoryImages(input);
    data.photos.map((photo) => {
      images.push(photo);
    })
  }
  else {
    imageData.map((image) => {
      images.push(image);
    })
  }

  return images;
}