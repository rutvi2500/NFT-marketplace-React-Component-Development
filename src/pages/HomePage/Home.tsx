import Services from '../../components/Home/Services/Services';
import MainSection from '../../components/Home/MainSection/MainSection';
import { HomeStyle } from './Home.style';
import Featured from '../../components/Home/Featured/Featured';
import TopSellers from '../../components/Home/TopSellers/TopSellers';

const Home = () => {
  return (
    <HomeStyle>
      <MainSection />
      <Services />
      <Featured />
      <TopSellers />
    </HomeStyle>
  );
};

export default Home;
