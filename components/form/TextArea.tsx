import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type TextAreaInputProps = {
  name: string;
  labelText?: string;
  defaultValue?: string;
};

function TextArea({ name, labelText, defaultValue }: TextAreaInputProps) {
  return (
    <div className='mb-2' >
        <Label htmlFor={name} className='capitalize' > {labelText} </Label>
        <Textarea  id={name} name={name} defaultValue={defaultValue} rows={5} required />  
    </div>
  )
}

export default TextArea