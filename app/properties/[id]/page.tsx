import FavoriteButton from '@/components/card/FavoriteButton';
import PropertyRating from '@/components/card/PropertyRating';
import Amenities from '@/components/properties/Amenities';
import BreadCrump from '@/components/properties/BreadCrump';
import BookingCalendar from '@/components/properties/Calendar';
import Description from '@/components/properties/Description';
import ImageContainer from '@/components/properties/ImageContainer';
import PropertiesDetails from '@/components/properties/PropertiesDetails';
import ShareButton from '@/components/properties/ShareButton';
import UserInfo from '@/components/properties/UserInfo';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { fetchPropertyDetails } from '@/utils/actions';
import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';
import React from 'react';

const DynamicMap=dynamic( ()=> import('@/components/properties/PropertyMap'), {
    ssr:false,
    loading: () => <Skeleton className=' h-[400px] w-full ' />
} )

export default async function DetailPage({ params }: { params: { id: string } }) {
  const property = await fetchPropertyDetails(params.id);


  if (!property) {
    redirect('/');
  }

  const { baths, bedrooms, beds, guests } = property;
  const details = { baths, bedrooms, beds, guests };
  const firstName = property.profile.firstName
  const profileImage = property.profile.profileImage
  return (
    <div>
     <section>
        <BreadCrump name={property.name}  />
        <header className='flex justify-between items-center mt-4' >
            <h1 className='text-4xl font-bold capitalize' > {property.tagline} </h1>
            <div className="flex items-center gap-x-4 ">  
         
                <ShareButton name={property.name} propertyId={property.id} />
                <FavoriteButton propertyId={property.id} />
                 </div>
             </header>
             <ImageContainer mainImage={property.image} name={property.name} />
             <section className='lg:grid lg:grid-cols-12 gap-x-12 mt-12' > 
<div className="lg:col-span-8">
    <div className="flex gap-4 items-center"> 
        <h1 className="text-xl font-bold  "> {property.name} </h1>
        <PropertyRating inPage propertyId={property.id} />
    </div>
        <PropertiesDetails details={details} />
        <UserInfo profile={{
                          profileImage,
                          firstName
                      }}  />

        <Separator className='mt-4' />
        <Description description={property.description}  />
        <Amenities amenities={property.amenities} />
        <DynamicMap  countryCode={property.country}  />
</div>
<div className="lg:col-span-4 flexflex-col items-center ">
    <BookingCalendar />
</div>
</section>
     </section>
  
    </div>
  );
}
