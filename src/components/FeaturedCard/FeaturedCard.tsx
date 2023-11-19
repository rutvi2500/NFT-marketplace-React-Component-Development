import { FeaturedCardStyle } from './FeaturedCard.style';
import Clock from '../../assets/Card/Clock.svg';
import CardImg1 from '../../assets/Card/CardImg1.svg';
import Avatar1 from '../../assets/Avatar/Avatar1.svg';
import Ethereum from '../../assets/Card/Ethereum.svg';
import Like from '../../assets/Card/Like.svg';

const FeaturedCard = () => {
  return (
    <FeaturedCardStyle>
      <div className='card-image'>
        <img src={CardImg1} alt='featured-img' />
        <div className='time'>
          <img src={Clock} />
          <p>05:20</p>
        </div>
      </div>
      <div className='card-content'>
        <div className='card-title'>Deadzone 13 Hideout</div>
        <div className='seller'>
          <img src={Avatar1} alt='avatar' />
          <p>@marterium</p>
        </div>
        <div className='stats-container'>
          <div className='left-stats'>
            <img src={Ethereum} alt='ethereum' />
            <div className='stats-content'>
              <p className='bnb'>0.49 BNB</p>
              <p className='price'>≈ $140.05</p>
            </div>
          </div>
          <div className='likes'>
            <img src={Like} alt='like' />
            <p>34</p>
          </div>
        </div>
      </div>
    </FeaturedCardStyle>
  );
};

export default FeaturedCard;
