import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  display: flex;
  justify-content: center;
}
body {
  font-family: Helvetica;
  padding: 0;
  margin: 20px;
  max-width: 1440px;
  a {
    color: #7B61FF
  }
}

`;

export default GlobalStyle;
