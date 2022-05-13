import styled from "styled-components";

const Container = styled.header`
  position: sticky;
  top: -1px;
  gap: 1rem;

  display: flex;
  overflow: hidden;
  z-index: ${({ theme }) => theme.zIndex.header};

  border-style: solid;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray[500]};

  width: 100%;
  height: ${({ theme }) => theme.size.header.height};
  padding: 1rem 1rem;

  background-color: ${({ theme }) => theme.colors.gray[900]};
`;

const LogoBox = styled.div`
  flex: 1;
`;

const Logo = styled.img`
  height: 100%;
`;

const ToolBox = styled.div`
  gap: 1rem;

  display: flex;
`;

const Avatar = styled.button`
  padding: 0;

  cursor: pointer;

  border: none;
  border-radius: 50%;
`;

const AvatarImg = styled.img`
  transform: scale(0.8);

  width: 100%;
  height: 100%;
  border-radius: 50%;
  vertical-align: middle;
`;

const S = {
  Container,
  Logo,
  LogoBox,
  ToolBox,
  Avatar,
  AvatarImg,
};

export default S;
