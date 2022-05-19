import styled, { css } from "styled-components";

import ButtonAnimation from "styles/ButtonAnimation";
import { Color, Size } from "types/style";

type ButtonType = {
  variant?: "contained" | "outlined";
} & Size &
  Color;
const Container = styled.button<ButtonType>`
  position: relative;

  border: none;
  border-radius: 5px;
  padding: 0;

  cursor: pointer;
  width: ${({ width }) => width || "5rem"};
  height: ${({ height }) => height || "3rem"};

  ${({ variant, bgColor, color }) => {
    switch (variant) {
      case "contained": {
        return css`
          background-color: ${() => bgColor};
          &:hover,
          &:active {
            filter: brightness(0.7);
          }
        `;
      }
      case "outlined": {
        return css`
          color: ${({ theme }) => color || theme.colors.white};
          background-color: transparent;
          ${ButtonAnimation}
        `;
      }
      default: {
        return css``;
      }
    }
  }}
`;

const S = {
  Container,
};

export default S;
