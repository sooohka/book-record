import React, { ReactNode } from "react";
import styled from "styled-components";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const Container = styled.div`
  flex-direction: column;
  display: flex;
`;

function AppContainer({ children }: { children: ReactNode }) {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
}

export default AppContainer;
