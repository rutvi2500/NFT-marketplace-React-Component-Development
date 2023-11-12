// import Logo from '../../assets/BnB.svg';
import HeaderStyle from './Header.style';
import Logo from '../../assets/BnB.svg';
import Search from '../../assets/Icons/Search.png';
import Lock from '../../assets/Icons/Lock.svg';
import Menu from '../../assets/Icons/Menu.svg';

const Header = () => {
  return (
    <HeaderStyle>
      <img height={'22px'} width={'55px'} src={Logo} alt='BnB Logo' />
      <div className='header-content'>
        <div className='header-left-menu'>
          Art&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;Community&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;Magazine&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;Shop
        </div>
        <div className='header-right-menu'>
          <img src={Search} alt='search-icon' />
          <div className='sign-in'>
            <img src={Lock} alt='search-icon' />
            <p>Sign in</p>
          </div>
          <img src={Menu} alt='menu-icon' />
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
