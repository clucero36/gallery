import Link from "next/link";

export default async function Home() {
  
  return (
    <>
      Home Page
      <div><Link href='/photo-gallery'>To Gallery</Link></div>
    </>
  );
}
