import Image from 'next/image'
import { ArrayFiller } from '../lib/util';

export default async function Images({query}) {

  const images = await ArrayFiller(query);

  return (
    <div className='flex flex-wrap justify-center'>
      {
        images.map((image, index) => {
          return (
            <Image
              src={image.src.medium}
              width={500}
              height={500}
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