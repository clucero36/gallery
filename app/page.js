import Link from "next/link";

export default async function Home() {
  // const data = await fetchImages('');
  
  
  return (
    <>
      Home Page
      <div><Link href='/photo-gallery'>To Gallery</Link></div>
    </>
  );
}
