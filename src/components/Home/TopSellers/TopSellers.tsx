import { Col, Row, Segmented } from 'antd';
import RightArrow from '../../../assets/Home/MainSection/Right-Arrow.svg';
import { TopSellerStyle } from './TopSellers.style';
import TopSellerCard from './TopSellerCard/TopSellerCard';
import { topSellers } from '../../../utils/Data';

const TopSellers = () => {
  return (
    <TopSellerStyle>
      <div className='section-title-container'>
        <div className='heading'>Top Sellers</div>
        <Segmented
          options={['1 day', '7 days', '30 days']}
          defaultValue={'7 days'}
        />
        <div className='see-all'>
          <p>See all</p>
          <img src={RightArrow} />
        </div>
      </div>
      <Row>
        <Col span={12} className='topseller-col1'>
          {topSellers.slice(0, 5).map((element, index) => (
            <TopSellerCard element={element} key={index} />
          ))}
        </Col>
        <Col span={12} className='topseller-col2'>
          {topSellers.slice(5, 10).map((element, index) => (
            <TopSellerCard element={element} key={index} />
          ))}
        </Col>
      </Row>
    </TopSellerStyle>
  );
};

export default TopSellers;
