'use client';
import { Input } from '../ui/input';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { useState, useEffect } from 'react';
function NavSearch() {
  const searchParams = useSearchParams()
  const pathName=usePathname()
  const {replace} = useRouter()
  const [search, setSearch] = useState(searchParams.get('search')?.toString() || '' )
  const handleSearch =  useDebouncedCallback(

    (value:string) => {
      const params = new URLSearchParams(searchParams)
      if(value) {
        params.set('search', value)
      }
      else {
        params.delete('search')
      }
      replace(`${pathName}?${params.toString()}`)
    }, 500
  )
  
  useEffect( () => {
    if(!searchParams.get('search')){
      setSearch('')
    }
  }, [searchParams.get('search')] )

  return (
   <Input type='text' onChange={ (e) => {setSearch(e.target.value); handleSearch(e.target.value)} } placeholder='find place...' value={search} className='max-w-xs dark:bg-muted' />
  )
}

export default NavSearch