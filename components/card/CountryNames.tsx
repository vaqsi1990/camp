import { findCountry } from '@/utils/countries';

function CountryNames({ countryCode }: { countryCode: string }) {
  const validCountry = findCountry(countryCode);
  const countryName =
    validCountry!.name.length > 20
      ? `${validCountry!.name.substring(0, 20)}...`
      : validCountry!.name;
  return (
    <span className='flex justify-between items-center gap-2 text-sm '>
      {countryName}
    </span>
  );
}

export default CountryNames