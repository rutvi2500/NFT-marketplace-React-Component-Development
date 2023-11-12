import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp/SignUp';
import Home from './pages/HomePage/Home';
import MarketPlace from './pages/MarketPlace/MarketPlace';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/marketplace' element={<MarketPlace />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
