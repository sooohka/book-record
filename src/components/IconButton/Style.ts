import styled from "styled-components";

const Container = styled.button`
  position: relative;

  flex-direction: column;
  align-items: center;

  display: flex;
  cursor: pointer;

  width: 7rem;
  height: 100%;

  border: none;

  background-color: white;

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

    background-color: rgba(1, 1, 1, 0.1);
  }

  :active {
    ::after {
      transform: scale(1);
      opacity: 1;
    }
  }

  & > svg {
    flex-grow: 1;
  }
`;

const Label = styled.legend``;

const S = { Container, Label };

export default S;