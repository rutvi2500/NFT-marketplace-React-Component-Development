import FeaturedCard from '../../components/FeaturedCard/FeaturedCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import { MarketPlaceCardsData } from '../../utils/Data';
import { MarketPlaceStyle } from './MarketPlace.style';
import LoadMore from '../../assets/MarketPlace/Reload.svg';

const MarketPlace = () => {
  return (
    <MarketPlaceStyle>
      <SearchBar />
      <div className='marketplace-cards-container'>
        {MarketPlaceCardsData.map((cardData) => (
          <FeaturedCard cardData={cardData} />
        ))}
      </div>
      <div className='loadmore-container'>
        <img src={LoadMore} alt='LoadMore' />
        <div>show more</div>
      </div>
    </MarketPlaceStyle>
  );
};

export default MarketPlace;
