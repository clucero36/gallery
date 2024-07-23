import Image from 'next/image'

export default function Images({images}) {

  const renderedImages = images.map((image, index) => {
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
  })//
  return (
    <div className='flex flex-wrap self-center'>
      {renderedImages}
    </div>
  )
}