import styled from "styled-components";

import { XOutlinedIcon } from "assets/svgs";

const Container = styled.dialog`
  position: absolute;
  top: 50%;
  left: 50%;
  flex-direction: column;
  gap: 1rem;
  z-index: ${({ theme }) => theme.zIndex.modal};

  display: flex;

  transform: translate(-50%, -50%);

  margin: 0;
  width: ${({ theme }) => theme.size.modal.width};
  height: ${({ theme }) => theme.size.modal.height};
  padding: 1.4rem;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.white};
`;

const Header = styled.header`
  align-items: center;

  display: flex;

  width: 100%;

  font-weight: bold;
  text-transform: capitalize;
`;

const Title = styled.h3`
  overflow: hidden;
  flex: 1;

  font-size: 1.6rem;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const CloseButton = styled.button`
  //TODO:modal button 다시만들기
  all: unset;

  transform: translate(1rem, -1rem);

  border: none;
  width: 2rem;
  height: 2rem;

  background-color: transparent;
  cursor: pointer;

  :hover {
    transform: translate(1rem, -1rem) scale(1.1);
  }
  :focus-visible {
    outline: 2px auto blue;
    outline: 2px auto -webkit-focus-ring-color;
  }
`;

const CloseIcon = styled(XOutlinedIcon)`
  width: 2rem;
  height: 2rem;

  stroke-width: 2.5px;
`;

const Content = styled.article`
  flex-direction: column;
  gap: 2rem;
  flex: 1;

  display: flex;

  font-size: 1.2rem;
`;

const Paragraph = styled.p`
  flex: 1;
`;

const ButtonBox = styled.div`
  justify-content: flex-end;
  gap: 0.5rem;

  display: flex;

  width: 100%;
`;

const Button = styled.button`
  all: unset;

  cursor: pointer;

  width: 8rem;
  height: 3rem;
  box-shadow: 1px 1px 1px 1px rgba(1, 1, 1, 0.1);
  border-radius: 3px;

  background-color: ${({ theme }) => theme.colors.gray[500]};

  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  :hover {
    filter: brightness(0.8);
  }
  :focus,
  :focus-visible {
    outline: 2px;
    outline-color: blue;
    outline-color: -webkit-focus-ring-color;
    outline-style: auto;
    outline-offset: -2px;
  }
`;

const LeftButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary.dark};
`;

const RightButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.gray[800]};
`;

const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${({ theme }) => theme.zIndex.backDrop};

  width: ${({ theme }) => theme.size.app.width};
  height: ${({ theme }) => theme.size.app.height};
  margin: 0 auto;

  background-color: rgba(1, 1, 1, 0.8);
`;

const S = {
  Container,
  Header,
  Title,
  CloseButton,
  CloseIcon,
  Content,
  Paragraph,
  ButtonBox,
  LeftButton,
  RightButton,
  BackDrop,
};

export default S;
