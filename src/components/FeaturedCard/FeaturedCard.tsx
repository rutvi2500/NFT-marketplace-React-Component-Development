import { FeaturedCardStyle } from './FeaturedCard.style';
import Clock from '../../assets/Card/Clock.svg';
import Ethereum from '../../assets/Card/Ethereum.svg';
import Like from '../../assets/Card/Like.svg';

interface FeaturedCardProps {
  cardData: {
    time: string;
    likes: string;
    cardImg: string;
    creatorAvatar: string;
    creatorName: string;
  };
}

const FeaturedCard = ({ cardData }: FeaturedCardProps) => {
  const { time, likes, cardImg, creatorName, creatorAvatar } = cardData;
  return (
    <FeaturedCardStyle>
      <div className='card-image'>
        <img src={cardImg} alt={`${cardImg}`} />
        <div className='time'>
          <img src={Clock} />
          <p>{time}</p>
        </div>
      </div>
      <div className='card-content'>
        <div className='card-title'>Deadzone 13 Hideout</div>
        <div className='seller'>
          <img src={creatorAvatar} alt='creator-avatar' />
          <p>{creatorName}</p>
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
            <p>{likes}</p>
          </div>
        </div>
      </div>
    </FeaturedCardStyle>
  );
};

export default FeaturedCard;
