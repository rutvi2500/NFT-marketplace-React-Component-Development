import styled from 'styled-components';

const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  right: 20px;
  left: 20px;

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
          font-size: ${(props) => props.theme.fontXL};
          font-weight: ${(props) => props.theme.bold1};
          line-height: 48px;
        }
        h3 {
          color: ${(props) => props.theme.black90};
          font-size: ${(props) => props.theme.fontM1};
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
        font-size: ${(props) => props.theme.fontM};
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
        font-size: ${(props) => props.theme.fontS};
        font-weight: ${(props) => props.theme.bold3};
        padding: 5px 0;
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
    padding: 75px 150px 55px;
    display: flex;
    justify-content: space-between;
    .footer-terms-left {
      display: flex;
      gap: 30px;
      color: ${(props) => props.theme.gray3};
      font-size: ${(props) => props.theme.fontXs};
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
