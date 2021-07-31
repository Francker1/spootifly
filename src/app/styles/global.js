import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root{
  --white-color: #FEFEFE;
  --black-color: #121216;
  --black-color-mid: #191922;
  --accent-color: #F14668;
  --accent-color-dark: #CC3A57;
  --main-color: #0E3150;
  --gray-color-mid: #32323D;
}

body {
  color: var(--white-color);
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

a{
  &:hover{
    text-decoration: none;
  }
}
`;

export default GlobalStyle;
