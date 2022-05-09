import { css } from "styled-components";

const ButtonAnimation = css`
  ::after {
    content: "";

    position: absolute;
    top: 0;
    left: 0;

    transform: scale(0.2);
    transition: transform 0.2s ease-out;

    opacity: 0;

    width: 100%;
    height: 100%;
    border-radius: 50%;

    background-color: rgba(255, 255, 255, 0.1);
  }

  :active {
    ::after {
      transform: scale(1.3);
      opacity: 1;
    }
  }
`;

export default ButtonAnimation;
