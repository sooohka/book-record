import styled from "styled-components";

const Container = styled.header`
  position: sticky;
  top: 0;

  display: flex;

  overflow: hidden;

  width: 100%;
  height: ${({ theme }) => theme.size.header.height};
`;

const Logo = styled.img`
  height: 100%;
`;

const S = {
  Container,
  Logo,
};

export default S;
