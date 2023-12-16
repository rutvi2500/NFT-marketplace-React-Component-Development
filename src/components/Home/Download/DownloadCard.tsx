import { DownloadCardStyle } from './DownloadCardStyle';
import AppStoreBadge from '../../../assets/Home/Download/AppStore.svg';
import PlayStoreBadge from '../../../assets/Home/Download/Playstore.svg';
import BackMobileBg from '../../../assets/Home/Download/mobile1/Body fill.svg';
import BackMobileSpeaker from '../../../assets/Home/Download/mobile1/Speaker.svg';
import BackMobileScreen from '../../../assets/Home/Download/mobile1/Screen fill.svg';
import FrontMobileBg from '../../../assets/Home/Download/mobile2/Body fill.svg';
import FrontMobileSpeaker from '../../../assets/Home/Download/mobile2/Speaker and camera.svg';
import FrontMobileScreen from '../../../assets/Home/Download/mobile2/Screen fill.svg';

const DownloadCard = () => {
  return (
    <DownloadCardStyle>
      <div className='download-text'>
        <div className='download-heading'>
          Download BnB app to track your NFT portfolio and discover drops
        </div>
        <div className='download-subheading'>
          Bringing you the latest in NFTs, Blockchain Gaming, Metaverse and
          Cryptocurrencies. Launchpad is the true home of BnB
        </div>
        <div className='badge-container'>
          <img src={AppStoreBadge} alt='AppStoreBadge' />
          <img src={PlayStoreBadge} alt='PlayStoreBadge' />
        </div>
      </div>
      <div className='mobile-images-container'>
        <div className='front-mobile-img-container'>
          <div className='front-mobile-img'>
            <img
              src={FrontMobileBg}
              alt='mobileBg'
              className='front-mobile-bg'
            />
            <img
              src={FrontMobileSpeaker}
              alt='mobileSpeaker'
              className='front-mobile-speaker'
            />
            <img
              src={FrontMobileScreen}
              alt='mobileScreen'
              className='front-mobile-screen'
            />
          </div>
        </div>
        <div className='back-mobile-img-container'>
          <div className='back-mobile-img'>
            <img src={BackMobileBg} alt='mobileBg' className='back-mobile-bg' />
            <img
              src={BackMobileSpeaker}
              alt='mobileSpeaker'
              className='back-mobile-speaker'
            />
            <img
              src={BackMobileScreen}
              alt='mobileScreen'
              className='back-mobile-screen'
            />
          </div>
        </div>
      </div>
    </DownloadCardStyle>
  );
};

export default DownloadCard;
