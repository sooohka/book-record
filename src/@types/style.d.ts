import "styled-components";

type Size = {
  width?: string;
  height?: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: {
        dark: string;
        light: string;
      };
      secondary: {
        dark: string;
        light: string;
      };
      black: string;
      white: string;
      gray: {
        "50": string;
        "100": string;
        "200": string;
        "300": string;
        "400": string;
        "500": string;
        "600": string;
        "700": string;
        "800": string;
        "900": string;
      };
    };
    size: {
      app: {
        width: string;
        height: string;
      };
      modal: {
        width: string;
        height: string;
      };
      header: {
        height: string;
      };
      footer: {
        height: string;
      };
    };
    zIndex: {
      header: number;
      footer: number;
      backDrop: number;
      modal: number;
    };
  }
}
