import { SignUpStyleContainer } from './SignUp.style';
import SignUpForm from '../../components/SignUp/SignUpForm';
import FrontImg from '../../assets/SignUp/ape_glass_eye-removebg-preview 1.png';
import BackgroundImg from '../../assets/SignUp/background-image.png';
import Logo from '../../assets/SignUp/BnB.svg';

const SignUp = () => {
  return (
    <SignUpStyleContainer>
      <SignUpForm />
      <div className='vertical-line'></div>
      <div className='img-container'>
        <img
          src={BackgroundImg}
          alt='background-image'
          className='background-image'
        />
        <img src={FrontImg} alt='signup-front-image' className='front-image' />
        <img src={Logo} alt='BnB' className='bnb-logo'/>
      </div>
    </SignUpStyleContainer>
  );
};

export default SignUp;
