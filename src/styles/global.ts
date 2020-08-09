import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      outline: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;

      &:not(h1, h2, h3, h4, h5, h6) {
        font-family: 'Inter', sans-serif;
      }
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Heebo', sans-serif;
    }

    html, body, #root {
      background-color: ${({ theme: { colors } }) => colors.darkBody};
      min-height: 100%;
    }

    body, input, button {
      font-family: 'Inter', sans-serif;
      -webkit-font-smoothing: antialiased;
    }

    button {
      cursor: pointer;
    }
`;
