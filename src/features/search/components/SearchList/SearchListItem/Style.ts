import styled from "styled-components";

const Container = styled.li`
  position: relative;

  align-items: center;
  gap: 1rem;

  display: flex;

  padding: 1rem;

  &::after {
    content: "";

    position: absolute;
    top: 0;
    left: 0;

    opacity: 0.1;

    transition: all 0.1s;
    transform: scale(0.2);

    width: 100%;
    height: 100%;
  }
  &:active {
    &::after {
      left: 0;

      transform: scale(1);

      background-color: ${({ theme }) => theme.colors.white};
    }
  }
`;

const Text = styled.p`
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const S = {
  Container,
  Text,
};

export default S;
