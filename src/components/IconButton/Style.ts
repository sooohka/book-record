import styled from "styled-components";

import ButtonAnimation from "styles/ButtonAnimation";
import { Size } from "types/style";

const Container = styled.button<Size>`
  position: relative;

  flex-direction: column;
  align-items: center;

  display: flex;
  cursor: pointer;

  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
  padding: 0;

  border: none;

  background-color: transparent;

  color: ${({ color }) => color || "white"};
  ${ButtonAnimation}
  & > svg {
    flex-grow: 1;
  }
`;

const Label = styled.legend``;

const S = { Container, Label };

export default S;
