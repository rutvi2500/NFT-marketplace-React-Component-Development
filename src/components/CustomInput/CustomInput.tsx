import { Input } from '../Ant/Input/Input.style';
import { CustomInputStyle } from './CustomInput.style';

interface CustomInputProps {
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  suffix?: JSX.Element;
}

const CustomInput = ({
  label,
  placeholder,
  suffix,
  type,
  required,
}: CustomInputProps) => {
  return (
    <CustomInputStyle>
      <Input
        placeholder={placeholder}
        required={true}
        type={type}
        suffix={suffix}
      />
      <label className='input-label'>
        {label}
        {required && <span className='required'> *</span>}
      </label>
    </CustomInputStyle>
  );
};

export default CustomInput;
