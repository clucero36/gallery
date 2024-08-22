import Images from "./ui/images";
import Search from "./ui/search";
import { ImagesSkeleton } from "./skeletons";
import { Suspense } from "react";

export default async function Page({ searchParams }) {
  const query = searchParams?.query || '';

  return (
    <div className='flex flex-col mx-auto my-0'>
      <p className='text-center text-xl p-12'>Welcome to the Gallery</p>
      <Search />
      <Suspense key={searchParams.query} fallback={<ImagesSkeleton />}>
        <Images query={query}/>
      </Suspense>
    </div>
  )
}