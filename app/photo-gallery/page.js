import Images from "../ui/images";
import Search from "../ui/search";
import data from '../lib/data';
import { fetchCategoryImages } from "../lib/api";

export default async function Page({ searchParams }) {
  const query = searchParams?.query || '';
  const imageData = data.media;
  var images = [];

  if (query.length === 0) {
    imageData.map((image) => {
      images.push(image);
    })
  }
  else {
    const data = await fetchCategoryImages(query);
    data.photos.map((photo) => {
      images.push(photo);
    })
  }

  return (
    <div className='flex flex-col mx-auto my-0 content-center'>
      <Search />
      <Images images={images} />
    </div>

  )
}