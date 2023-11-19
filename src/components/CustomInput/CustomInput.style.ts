import styled from 'styled-components';

export const CustomInputStyle = styled.div`
  margin-top: 15px;
  position: relative;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.dark2};
  width: 100%;

  .input-label {
    position: absolute;
    top: -8px;
    left: 8px;
    padding: 0 8px;
    font-size: ${(props) => props.theme.fontXxs};
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.gray3};
    font-weight: ${(props) => props.theme.bold1};

    .required {
      color: #ff564a;
      font-size: ${(props) => props.theme.fontXxs};
      font-weight: ${(props) => props.theme.bold1};
      line-height: 14px;
    }
  }
`;
