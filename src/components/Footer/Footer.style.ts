import styled from 'styled-components';

const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 20px;
  left: 20px;
  bottom: 55px;
  .footer-details {
    display: flex;
    justify-content: space-between;
    padding: 61px 150px 0;
    .details {
      .description {
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 24px;
        h2 {
          width: 444px;
          color: ${(props) => props.theme.black90};
          font-size: 40px;
          font-weight: ${(props) => props.theme.bold1};
          line-height: 48px;
        }
        h3 {
          color: ${(props) => props.theme.black90};
          font-size: 24px;
          font-weight: ${(props) => props.theme.bold1};
          line-height: 34px;
        }
      }
    }
    .socials {
      display: flex;
      align-items: center;
      .services {
        color: ${(props) => props.theme.black};
        text-align: right;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        padding: 6px 0;
      }
    }
  }
  .footer-subscribe {
    padding: 40px 150px 0;
    display: flex;
    justify-content: space-between;
    .subscribe {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 420px;
      gap: 24px;
      .subscribe-label {
        color: ${(props) => props.theme.black90};
        font-size: 16px;
        font-weight: ${(props) => props.theme.bold3};
        padding: 5px 0;
      }
      .input-container {
        margin-top: 15px;
        position: relative;
        border-radius: 10px;
        border: 2px solid ${(props) => props.theme.dark2};
        width: 100%;
      }
      .input-label {
        position: absolute;
        top: -8px;
        left: 8px;
        padding: 0 8px;
        font-size: 12px;
        background-color: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.gray3};
        font-weight: ${(props) => props.theme.bold1};
      }
    }
    .social-icons {
      display: flex;
      align-items: flex-end;
      padding-bottom: 16px;
      gap: 40px;
    }
  }
  .footer-terms {
    padding: 75px 150px 0;
    display: flex;
    justify-content: space-between;
    .footer-terms-left {
      display: flex;
      gap: 30px;
      color: ${(props) => props.theme.gray3};
      font-size: 14px;
      font-weight: 400;
    }
  }
  .footer-terms-right {
    color: ${(props) => props.theme.dark};
    font-family: Lato;
    font-size: 17px;
    font-weight: 400;
  }
`;

export default FooterStyle;
