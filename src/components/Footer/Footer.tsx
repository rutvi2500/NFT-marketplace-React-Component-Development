import FooterStyle from './Footer.style';
import Divider from '../../assets/Footer/Divider.svg';
import { Input } from '../Ant/Input/Input.style';
import Suffix from '../../assets/Footer/Suffix.png';
import Instagram from '../../assets/Footer/socials/Instagram.svg';
import Facebook from '../../assets/Footer/socials/Facebook.svg';
import GitHub from '../../assets/Footer/socials/GitHub.svg';
import Google from '../../assets/Footer/socials/Google.svg';
import Twitter from '../../assets/Footer/socials/Twitter.svg';
import Pinterest from '../../assets/Footer/socials/Pinterest.svg';

const Footer = () => {
  return (
    <FooterStyle>
      <img src={Divider} />
      <div className='footer-details'>
        <div className='details'>
          <div className='description'>
            <h2>
              Our platform is trusted by millions,& features an portfolio of
              financial product offerings.
            </h2>
            <h3>design4me@gmail.com</h3>
          </div>
        </div>
        <div className='socials services'>
          Art&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;Community&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;Magazine&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;Shop
        </div>
      </div>
      <div className='footer-subscribe'>
        <div className='subscribe'>
          <div className='subscribe-label'>Subscribe And Get News</div>
          <div className='input-container'>
            <Input placeholder='Enter Email' suffix={<img src={Suffix} />} />
            <label className='input-label'>Email</label>
          </div>
        </div>
        <div className='social-icons'>
          <img src={Instagram} />
          <img src={Facebook} />
          <img src={Twitter} />
          <img src={GitHub} />
          <img src={Google} />
          <img src={Twitter} />
          <img src={Pinterest} />
        </div>
      </div>
      <div className='footer-terms'>
        <div className='footer-terms-left'>
          <div>Privacy Policy</div>
          <div>Term of service</div>
          <div>Language</div>
        </div>
        <div className='footer-terms-right'>© 2022 Design4me</div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
