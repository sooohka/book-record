import styled from "styled-components";

const Container = styled.footer`
  justify-content: space-between;
  height: ${({ theme }) => theme.size.footer.height};

  display: flex;
`;

const LinkContainer = styled.div`
  justify-content: center;
  align-items: center;

  display: flex;

  width: 100%;

  background-color: white;
`;

const S = { Container, LinkContainer };

export default S;
