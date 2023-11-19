import styled from 'styled-components';

export const SignUpStyleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 150px 125px;
  align-items: center;

  .vertical-line {
    width: 1px;
    height: 584px;
    background-color: #232632;
    opacity: 0.1;
  }

  .img-container {
    position: relative;
    width: 457px;
    height: 459px;
    .background-image {
      width: 457px;
      height: 459px;
      flex-shrink: 0;
      z-index: 0;
      position: absolute;
    }
    .front-image {
      width: 400px;
      height: 400px;
      left: 25px;
      top: 26px;
      flex-shrink: 0;
      position: relative;
      z-index: 1;
    }
    .bnb-logo {
      position: relative;
      z-index: 2;
      left: 220px;
      top: -300px;
      width: 78px;
      height: 31px;
    }
  }
`;
