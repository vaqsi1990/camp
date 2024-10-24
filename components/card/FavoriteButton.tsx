import { FaHeart } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { auth } from '@clerk/nextjs/server';
import { CardSignInButton } from '../form/Buttons';
import { fetchFavoriteId } from '@/utils/actions';
import FavoriteForm from './FavoriteForm';

async function FavoriteButton({ propertyId }: { propertyId: string }) {
  const {userId} = auth()
  if(!userId) return <CardSignInButton />
  const favoriteId= await fetchFavoriteId( {propertyId} )
  return (
    <FavoriteForm favoriteId={favoriteId} propertyId={propertyId} /> 
  );
}

export default FavoriteButton