import Image from 'next/image';

function ImageContainer( {mainImage,
  name,
}: {
  mainImage: string;
  name: string;
}) {

  return (
   <section className='h-[400px] md:h-[800px] relative mt-8  ' >

<Image src={mainImage} priority className='object-cover rounded ' fill sizes='100vw' alt={name} />

   </section>
  )
}

export default ImageContainer