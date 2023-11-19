import { Button } from 'antd';

import CustomInput from '../CustomInput/CustomInput';
import { SignUpFormStyle } from './SignUpForm.style';
import CheckboxImg from '../../assets/SignUp/Form.svg';

const SignUpForm = () => {
  return (
    <SignUpFormStyle>
      <h2>Sign up</h2>
      <div className='form-fields'>
        <CustomInput
          label='Email / Phone number'
          placeholder='Enter your email or phone number'
          required
        />
        <CustomInput
          label='Password'
          placeholder='Enter Password'
          required
          // suffix={<img src={Suffix} alt='send icon' />}
        />
        <CustomInput label='Refferal ID:' placeholder='Enter referralId' />
      </div>
      <div className='signup-terms-container'>
        <img src={CheckboxImg} />
        <div className='signup-terms-content'>
          I have read and agree to BnB{' '}
          <a style={{ color: '#7B61FF' }}>Terms of Service</a> and{' '}
          <a style={{ color: '#7B61FF' }}>Private Policy</a>
        </div>
      </div>
      <Button className='create-account-btn' type='primary'>
        Create Personal Account
      </Button>
    </SignUpFormStyle>
  );
};

export default SignUpForm;
