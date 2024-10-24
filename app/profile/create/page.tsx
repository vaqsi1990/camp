
import { SubmitButton } from '@/components/form/Buttons';
import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import { Button } from '@/components/ui/button';
import { createProfileAction } from '@/utils/actions';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
async function CreateProfile() {
  const user = await currentUser()
  if(user?.privateMetadata?.hasProfile) redirect('/')
  return (
    <section>
        <h1 className="text-xl font-semibold capitalize mb-8  "> new user </h1>
        <div className="border p-8 rounded-md  ">
            <FormContainer action={createProfileAction}>
              <div className="grid md:grid-cols-2 gap-4">

      <FormInput type='text' name='firstName' label='first Name' />
      <FormInput type='text' name='lastName' label='last Name' />
      <FormInput type='text' name='username' label='user name' />

              </div>
      <SubmitButton  text='Create Profile' className='mt-8' />
            </FormContainer>
        </div>
    </section>
  )
}

export default CreateProfile