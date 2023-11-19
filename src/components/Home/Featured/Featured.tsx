import { FeaturedStyle } from './Featured.style';
import RightArrow from '../../../assets/Home/MainSection/Right-Arrow.svg';
import FeaturedCard from '../../FeaturedCard/FeaturedCard';

const Featured = () => {
  return (
    <FeaturedStyle>
      <div className='section-title-container'>
        <div className='heading'>Featured</div>
        <div className='see-all'>
          <p>See all</p>
          <img src={RightArrow} />
        </div>
      </div>
      <FeaturedCard />
    </FeaturedStyle>
  );
};

export default Featured;
