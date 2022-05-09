import styled from "styled-components";

const Container = styled.div`
  flex-direction: column;

  display: flex;

  max-width: 100vw;
`;

const Header = styled.header`
  gap: 1rem;
  align-items: center;

  display: flex;

  padding: 1rem;
`;

const Content = styled.article`
  padding: 2rem 0 0 0;
`;

const S = { Container, Header, Content };

export default S;
