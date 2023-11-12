import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Helvetica, sans-serif;
  padding: 0;
  margin: 20px;
}
`;

export default GlobalStyle;
