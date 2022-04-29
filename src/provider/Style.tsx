import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

type Props = {
  children: ReactNode;
};

function StyleProvider({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default StyleProvider;
