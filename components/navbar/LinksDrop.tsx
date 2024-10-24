import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { LuAlignLeft } from 'react-icons/lu';
import Link from 'next/link';
import { Button } from '../ui/button';
import UserIcon from './UserIcon';
import { links } from '@/utils/links';

import { SignedOut, SignedIn, SignInButton, SignUpButton } from '@clerk/nextjs';
import SignOut from './SignOut';
function LinksDrop() {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
    <Button className='flex gap-4 max-w-[100px] ' variant='outline'>
    <LuAlignLeft className='w-6 h-6' />
    <UserIcon />
    </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className='w-52 ' sideOffset={10} align='start' >
      <SignedOut  >
    <DropdownMenuItem>
      <SignInButton mode='modal' >
        <button className="w-full text-left ">Login</button>
         </SignInButton>
    </DropdownMenuItem>

    <DropdownMenuSeparator/>


    <DropdownMenuItem>
      <SignUpButton mode='modal' >
        <button className="w-full text-left ">Register</button>
         </SignUpButton>
    </DropdownMenuItem>

 
      </SignedOut>

      <SignedIn>
    {links.map( (L) => {
      return <DropdownMenuItem key={L.href} >
        <Link className='capitalize w-full' href={L.href} > 
        {L.label}
        </Link>
      </DropdownMenuItem>
    } )}
<DropdownMenuSeparator/>
  <DropdownMenuItem>
    < SignOut />
  </DropdownMenuItem>

      </SignedIn>
    </DropdownMenuContent>
      </DropdownMenu>
  )
}

export default LinksDrop