import styled from 'styled-components';

export const ServicesStyle = styled.div`
  border-radius: 10px;
  background: ${(props) => props.theme.dark2};
  height: 180px;
  display: flex;
  gap: 50px;
  padding: 0 40px;
  align-items: center;

  .main-col {
    width: 263px;
    color: ${(props) => props.theme.white};
    font-size: ${(props) => props.theme.fontXL};
    font-weight: ${(props) => props.theme.dark2};
    line-height: 48px;
  }

  .sub-col-container {
    display: flex;
    gap: 40px;
  }

  .sub-col {
    width: 195px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;

    .title {
      color: ${(props) => props.theme.white};
      font-size: ${(props) => props.theme.fontM1};
      font-weight: 500;
      line-height: 34px;
    }
    .description {
      color: ${(props) => props.theme.white};
      font-size: ${(props) => props.theme.fontXs};
      font-weight: 400;
      line-height: 24px;
    }
  }
  .divider {
    width: 1px;
    background: white;
  }
`;
