import { ServicesStyle } from './Services.style.';

const Services = () => {
  return (
    <ServicesStyle>
      <div className='main-col'>Create and sell your NFTs</div>
      <div className='sub-col-container'>
        <div className='sub-col'>
          <div className='title'>Create</div>
          <div className='description'>Creative building blocks for BnB.</div>
        </div>
        <div className='divider'></div>
        <div className='sub-col'>
          <div className='title'>Collect</div>
          <div className='description'>
            Unearth NFTs for your growing collection.
          </div>
        </div>
        <div className='divider'></div>
        <div className='sub-col'>
          <div className='title'>Sell</div>
          <div className='description'>
            Your NFTs will shine in our marketplace.
          </div>
        </div>
      </div>
    </ServicesStyle>
  );
};

export default Services;
