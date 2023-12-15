import { useNavigate } from 'react-router-dom';
import { FeaturedStyle } from './Featured.style';
import RightArrow from '../../../assets/Home/MainSection/Right-Arrow.svg';
import FeaturedCard from '../../FeaturedCard/FeaturedCard';
import { HomePageCardsData } from '../../../utils/Data';

const Featured = () => {
  const navigate = useNavigate();
  return (
    <FeaturedStyle>
      <div className='section-title-container'>
        <div className='heading'>Featured</div>
        <div
          className='see-all'
          onClick={() => {
            navigate('/marketplace');
          }}
        >
          <p>See all</p>
          <img src={RightArrow} />
        </div>
      </div>
      <div className='featured-cards-container'>
        {HomePageCardsData.map((cardData, index) => (
          <FeaturedCard key={index} cardData={cardData} />
        ))}
      </div>
    </FeaturedStyle>
  );
};

export default Featured;
