const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';


export function ImageSkeleton() {
  return (
    <div className={`${shimmer} flex flex-wrap justify-center relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}>

    </div>
  )
}