import HeaderStyle from './Header.style';
import Logo from '../../assets/Header/BnB.svg';
import Search from '../../assets/Header/Search.png';
import Lock from '../../assets/Header/Lock.svg';
import MenuIcon from '../../assets/Header/Menu.svg';
import MenuBgImg from '../../assets/Header/Ellipse 1.svg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderStyle>
      <img
        onClick={() => {
          navigate('/');
        }}
        height={'22px'}
        width={'55px'}
        src={Logo}
        style={{ cursor: 'pointer' }}
        alt='BnB Logo'
      />
      <div className='header-content'>
        <div className='header-left-menu'>
          Art&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;Community&nbsp;&nbsp;&nbsp;&nbsp;/
          &nbsp;&nbsp;&nbsp;&nbsp;Magazine&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;Shop
        </div>
        <div onClick={() => navigate('/signup')} className='header-right-menu'>
          <img src={Search} className='search-icon' alt='search-icon' />
          <div className='sign-in'>
            <img src={Lock} className='lock-icon' alt='lock-icon' />
            <p>Sign in</p>
          </div>
          <div className='menu-img-container'>
            <img
              src={MenuBgImg}
              alt='menu-icon-bg'
              width={'50px'}
              height={'50px'}
              className='menu-bg'
            />
            <img src={MenuIcon} alt='menu-icon' className='menu-icon' />
          </div>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
