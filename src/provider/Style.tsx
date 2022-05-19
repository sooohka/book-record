import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";

import GlobalStyle from "styles/global";
import theme from "styles/theme";

type Props = {
  children: ReactNode;
};

function StyleProvider({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default StyleProvider;
