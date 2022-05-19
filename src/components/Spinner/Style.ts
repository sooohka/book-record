import styled from "styled-components";

import { ReactComponent as SpinnerSvg } from "assets/spinner.svg";

const Spinner = styled(SpinnerSvg)`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: ${({ theme }) => theme.zIndex.modal};

  transform: translate(-50%, -50%) scale(0.7);
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${({ theme }) => theme.zIndex.backDrop};

  opacity: 0.7;

  margin: 0 auto;
  width: ${({ theme }) => theme.size.app.width};
  height: ${({ theme }) => theme.size.app.height};

  background-color: black;
`;

const S = { Spinner, Backdrop };

export default S;
