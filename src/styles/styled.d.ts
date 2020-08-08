import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      darkBody: string;
      darkFooter: string;
      primary: string;
      secondary: string;
      texts: string;
    }
  }
}
