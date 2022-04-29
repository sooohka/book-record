/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 0; 
    background: transparent;
  }
  *,*::after,*::before{
    box-sizing: border-box;
  }
  html {
    height: 100%;
    font-size: 62.5%;
  }
  body {
    display: flex;
    height: 100%;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.gray[700]};
    font-size: 1.4rem;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.white};
  };
  a,a:any-link{
    color:inherit;
    text-decoration: none;
    :focus-visible {
    
    outline: blue auto 2px;
    outline: -webkit-focus-ring-color auto 1px;
  }
  }

  #root {
    flex: 1;
  }
`;

export default GlobalStyle;
