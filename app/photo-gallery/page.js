import Images from "../ui/images";
import Search from "../ui/search";
import { ImageSkeleton } from "../skeletons";
import { Suspense } from "react";

export default async function Page({ searchParams }) {
  const query = searchParams?.query || '';

  return (
    <div className='flex flex-col mx-auto my-0'>
      <Search />
      <Suspense fallback={<ImageSkeleton />}>
        <Images query={query}/>
      </Suspense>
    </div>

  )
}