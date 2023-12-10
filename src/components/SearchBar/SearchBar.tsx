import { Button } from './Button.style';
import { SearchBarStyle } from './SearchBar.style';
import Filter from '../../assets/MarketPlace/Filter.svg';
import Dropdown from '../../assets/MarketPlace/Dropdown.svg';
import Columns from '../../assets/MarketPlace/column.svg';
import Frame from '../../assets/MarketPlace/Frame 8.svg';
import Search from '../../assets/Header/Search.png';
import { Input } from '../Ant/Input/Input.style';

const SearchBar = () => {
  return (
    <SearchBarStyle>
      <Button width={148}>
        <img src={Filter} alt='filter' />
        Filters
      </Button>
      <Button width={180}>
        NFT's
        <img src={Dropdown} alt='dropdown' />
      </Button>
      <Input
        placeholder={'Search by collection, user or NFT...'}
        required={true}
        suffix={<img src={Search} alt='send' />}
      />
      <Button width={148}>
        Trending
        <img src={Dropdown} alt='dropdown' />
      </Button>
      <Button width={56}>
        <img src={Columns} alt='dropdown' />
      </Button>
      <Button width={56} disabled>
        <img src={Frame} alt='dropdown' />
      </Button>
    </SearchBarStyle>
  );
};

export default SearchBar;
