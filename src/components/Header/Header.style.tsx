import styled from 'styled-components';

const HeaderStyle = styled.header`
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 50px;
  line-height: 26px;
  font-size: 14px;
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-left: 60px;
  }
  .header-left-menu {
    color: ${(props) => props.theme.black};
    font-weight: ${(props) => props.theme.bold1};
  }
  .header-right-menu {
    display: flex;
    gap: 60px;
    align-items: center;
    img {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
    p {
      color: ${(props) => props.theme.black90};
      font-weight: ${(props) => props.theme.bold1};
      text-decoration-line: underline;
      cursor: pointer;
    }
  }
  .sign-in {
    display: flex;
    gap: 16px;
    align-items: center;
  }
`;

export default HeaderStyle;
