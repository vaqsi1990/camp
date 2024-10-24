'use client'
import { SignOutButton } from '@clerk/nextjs';
import { useToast } from '@/hooks/use-toast'; 

function SignOut() {
  const  {toast} = useToast()

  const handleLogout = () => {
    toast({description:' you are sign out'})
  }

  return (
    <SignOutButton redirectUrl='/' >
      <button className='w-full text-left' onClick={handleLogout} >
        Logout
      </button>
    </SignOutButton>
  )
}

export default SignOut


