import Ethereum from '../../../../assets/Card/Ethereum.svg';
import { TopSellerCardStyle } from './TopSellerCard.style';

interface TopSellerCardData {
  id: number;
  sellerName: string;
  floor: string;
  bnb: number;
  price: number;
  increase: number;
  sellerAvatar: string
}

const TopSellerCard = ({ element }: { element: TopSellerCardData }) => {
  const { id, sellerName, floor, bnb, price, increase, sellerAvatar } = element;
  return (
    <TopSellerCardStyle>
      <div className='creator-detail-container'>
        <div className='number'>{id}</div>
        <div className='creator-details'>
          <img src={sellerAvatar} alt='avatar' />
          <div className='creator'>
            <p className='creator-id'>{sellerName}</p>
            <p className='creator-floor'>Floor: {floor}ETH</p>
          </div>
        </div>
      </div>
      <div className='stats-details'>
        <img src={Ethereum} alt='Ethereum' />
        <div>
          <p className='bnb'>{bnb} BNB</p>
          <div className='stats'>
            <p className='price'>{price}M</p>
            <p className='increase'>+{increase}%</p>
          </div>
        </div>
      </div>
    </TopSellerCardStyle>
  );
};

export default TopSellerCard;
