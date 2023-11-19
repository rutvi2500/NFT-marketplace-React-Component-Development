import styled from 'styled-components';

export const SignUpFormStyle = styled.div`
  h2 {
    color: ${(props) => props.theme.black90};
    font-size: ${(props) => props.theme.fontXL};
    font-weight: ${(props) => props.theme.bold1};
    line-height: 48px;
  }

  .signup-terms-container {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-top: 24px;

    .signup-terms-content {
      color: ${(props) => props.theme.gray3};
      font-size: ${(props) => props.theme.fontXs};
      font-weight: 400;
      line-height: 22px;
    }
  }

  .create-account-btn {
    height: 56px;
    width: 100%;
    margin-top: 33px;

    color: ${(props) => props.theme.white};
    text-align: center;
    font-size: ${(props) => props.theme.fontS};
    font-weight: ${(props) => props.theme.bold3};
    line-height: 26px;
  }

  .form-fields {
    margin-top: 40px;
    width: 458px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;
