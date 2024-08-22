const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';


export function ImageSkeleton() {
  return (
    <div className={`${shimmer} relative overflow-hidden rounded-xl p-2 w-80 h-40 shadow-sm`}>

    </div>
  )
}

export function ImagesSkeleton() {
  return (
    <div className='flex flex-wrap w-3/5 justify-center mx-auto'>
      <ImageSkeleton />
      <ImageSkeleton />
      <ImageSkeleton />
      <ImageSkeleton />
      <ImageSkeleton />
      <ImageSkeleton />
      <ImageSkeleton />
      <ImageSkeleton />
      <ImageSkeleton />
      <ImageSkeleton />
      <ImageSkeleton />
      <ImageSkeleton />
      <ImageSkeleton />
      <ImageSkeleton />
    </div>
  )
}