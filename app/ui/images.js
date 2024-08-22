import Image from 'next/image'
import { fetchCategoryImages } from '../lib/api'
import data from '../lib/data';

export default async function Images({query}) {
  const imageData = data.media;
  let images = [];

  if (query.length !== 0) {
    const data = await fetchCategoryImages(query);

    data.photos.map((photo) => {
      images.push(photo);
    })
  }
  else {
    imageData.map((image) => {
      images.push(image);
    })
  }

  return (
    <div className='flex flex-wrap justify-center'>
      {
        images.map((image, index) => {
          return (
            <Image
              src={image.src.medium}
              width={800}
              height={1200}
              alt={image.alt}
              key={index}
              className='w-auto h-auto'
            />
          )
        })
      }
    </div>
  )
}