import styled from "styled-components";

const Container = styled.div`
  z-index: ${({ theme }) => theme.zIndex.header};

  width: ${({ theme }) => theme.size.app.width};
  height: ${({ theme }) => theme.size.header.height};
  padding: 1.6rem;

  background-color: ${({ theme }) => theme.colors.black};
`;

const Form = styled.form`
  display: flex;

  width: 100%;
  height: 100%;
`;

const S = {
  Container,
  Form,
};

export default S;
