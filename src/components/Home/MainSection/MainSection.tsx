import { MainSectionStyle } from './MainSection.style';

import MainImg from '../../../assets/Home/MainSection/MainImg.svg';
import PlayBg from '../../../assets/Home/MainSection/PlayBg.svg';
import Play from '../../../assets/Home/MainSection/Play.svg';
import Avatar from '../../../assets/Home/MainSection/Avatar.svg';
import SliderImg from '../../../assets/Home/MainSection/Slider Switch.svg';
import LeftArrow from '../../../assets/Home/MainSection/Left-Arrow.svg';
import RightArrow from '../../../assets/Home/MainSection/Right-Arrow.svg';

import { Button } from 'antd';

const MainSection = () => {
  return (
    <MainSectionStyle>
      <div>
        <div className='main-content-container'>
          <h1>Discover, Collect, & sell NFTs</h1>
          <div className='main-description'>
            Discover the Most Premium, Unique and Exclusive NFT Collections
          </div>
          <div className='buttons'>
            <Button type='primary'>Explore</Button>
            <Button>Create</Button>
          </div>
        </div>
        <hr />
        <div className='learn-more'>
          <div className='learn-more-img-container'>
            <img src={PlayBg} className='play-bg' />
            <img src={Play} className='play' />
          </div>
          <div className='learn-more-content'>Learn more about BNB</div>
        </div>
      </div>
      <div className='right-img-container'>
        <img className='main-img' src={MainImg} />
        <div className='main-img-sub-section'>
          <div className='sub-section-details'>
            <img src={SliderImg} className='slider-img' />
            <img src={Avatar} alt='avatar' />
            <div className='content'>
              <p>
                <span className='title'>@marterium</span> created Machina
              </p>
              <p>an hour ago (2,000 views)</p>
            </div>
          </div>
          <div className='arrow-container'>
            <div className='arrow'>
              <img src={LeftArrow} />
            </div>
            <div className='arrow'>
              <img src={RightArrow} />
            </div>
          </div>
        </div>
      </div>
    </MainSectionStyle>
  );
};

export default MainSection;
