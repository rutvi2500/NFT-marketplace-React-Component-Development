import Services from '../../components/Home/Services/Services';
import MainSection from '../../components/Home/MainSection/MainSection';
import { HomeStyle } from './Home.style';

const Home = () => {
  return (
    <HomeStyle>
      <MainSection />
      <Services />
    </HomeStyle>
  );
};

export default Home;
