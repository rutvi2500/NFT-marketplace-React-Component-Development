import { MarketPlaceStyle } from './MarketPlace.style';
import PanelFill from '../../../assets/Home/VideoImage/Panel fill.svg';
import PageFill from '../../../assets/Home/VideoImage/Page fill.svg';
import ControlFill from '../../../assets/Home/VideoImage/Controls fill.svg';
import PlayBtn from '../../../assets/Home/VideoImage/Group 1.svg';
import Plus from '../../../assets/Home/VideoImage/Plus.svg';

const MarketPlace = () => {
  return (
    <MarketPlaceStyle>
      <div className='header'>
        <div className='section-heading'>BnB Nft Marketplace</div>
        <div className='section-subHeading'>
          Mission to lead the future of metaverse
        </div>
      </div>
      <div className='video-container'>
        <img src={PanelFill} alt={'panel'} />
        <div className='page-fill'>
          <img src={PageFill} alt={'page-fill'} />
          <img src={PlayBtn} alt={'play-btn'} className='play-btn' />
        </div>
        <img src={ControlFill} alt={'controll'} className='controll' />
        <img src={Plus} alt={'plus'} className='plus' />
      </div>
    </MarketPlaceStyle>
  );
};

export default MarketPlace;
