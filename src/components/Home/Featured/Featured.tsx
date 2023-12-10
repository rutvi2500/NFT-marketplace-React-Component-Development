import { FeaturedStyle } from './Featured.style';
import RightArrow from '../../../assets/Home/MainSection/Right-Arrow.svg';
import FeaturedCard from '../../FeaturedCard/FeaturedCard';
import { HomePageCardsData } from '../../../utils/Data';

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
      <div className='featured-cards-container'>
        {HomePageCardsData.map((cardData) => (
          <FeaturedCard cardData={cardData} />
        ))}
      </div>
    </FeaturedStyle>
  );
};

export default Featured;
