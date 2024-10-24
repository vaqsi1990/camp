"use client"
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Title from './Title';

function Description({ description }: { description: string }) {
    const [isDescription, setIsDescription] = useState(false)
    const words= description.split(' ')
    const longDescription = words.length > 50;

    const toggleDescription = () => {
        setIsDescription(!description)
    }

    const displayedDescription = longDescription && !isDescription? words.splice(0, 50).join(' ') + '...' : description

  return (
    <article className='mt-4' >
        <Title text={description} />
        <p className='text-muted-foreground font-light leading-loose'> {displayedDescription} </p>
        {longDescription && <Button onClick={toggleDescription} variant='link' className='pl-0 ' > {isDescription?'Show less' : 'Show more'} </Button>}
    </article>
  )
}

export default Description