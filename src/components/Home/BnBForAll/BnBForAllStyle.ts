import styled from 'styled-components';

export const BnBForAllStyle = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  .header {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    .section-heading {
      color: ${(props) => props.theme.dark2};
      font-size: ${(props) => props.theme.fontXL};
      font-weight: ${(props) => props.theme.bold1};
      line-height: 48px;
    }
    .section-subHeading {
      width: 485px;
      height: 61px;
      color: ${(props) => props.theme.dark2};
      text-align: center;
      font-size: ${(props) => props.theme.fontM};
      line-height: 32px;
    }
  }
  .avatars-container {
    display: flex;
    gap: 50px;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    img {
      width: 120px;
      height: 120px;
    }
  }
  .get-started-btn {
    width: 170px;
    height: 56px;
    border-radius: 10px;
    border: 2px solid ${(props) => props.theme.dark2};
    color: ${(props) => props.theme.dark2};
    text-align: center;
    font-size: ${(props) => props.theme.fontS};;
    font-weight: ${(props) => props.theme.bold3};
    text-transform: capitalize;
  }
`;
