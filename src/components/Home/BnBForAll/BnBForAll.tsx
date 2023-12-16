import { Button } from 'antd';
import { AllSellers } from '../../../utils/Data';
import { BnBForAllStyle } from './BnBForAllStyle';

const BnBForAll = () => {
  return (
    <BnBForAllStyle>
      <div className='header'>
        <div className='section-heading'>BnB is for everyone</div>
        <div className='section-subHeading'>
          Join the millions of creators, collectors, and curators who are on
          this journey with you.
        </div>
      </div>
      <div className='avatars-container'>
        {AllSellers.map((element, index) => (
          <img key={index} src={element} alt='avatar' />
        ))}
      </div>
      <Button className='get-started-btn'>Get Started</Button>
    </BnBForAllStyle>
  );
};

export default BnBForAll;
