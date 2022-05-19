import { ReactNode } from "react";
import styled from "styled-components";

import Content from "components/Layout/Content";
import Footer from "components/Layout/Footer";
import Header from "components/Layout/Header";

const Container = styled.div`
  flex-direction: column;
  display: flex;
`;

function AppWrapper({ children }: { children: ReactNode }) {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
}

export default AppWrapper;
