import styled from "styled-components";

const Container = styled.footer`
  justify-content: space-between;
  height: ${({ theme }) => theme.size.footer.height};

  display: flex;

  padding: 0.4rem 0;
  border-top-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.gray[500]};

  background-color: transparent;
`;

const LinkContainer = styled.div`
  justify-content: center;
  align-items: center;

  display: flex;

  width: 100%;
`;

const S = { Container, LinkContainer };

export default S;
