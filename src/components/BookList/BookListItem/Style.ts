import styled from "styled-components";

const Container = styled.li`
  display: flex;
  cursor: pointer;

  height: ${({ theme }) => theme.size.bookItem.height};
`;

const BookImg = styled.img``;

const InfoBox = styled.div`
  justify-content: space-around;
  flex-direction: column;
  gap: 0.3rem;

  display: flex;

  flex-grow: 1;
  padding: 0 1rem;

  color: ${({ theme }) => theme.colors.gray[500]};
`;

const Title = styled.h3`
  overflow: hidden;

  height: 3.2rem;

  color: ${({ theme }) => theme.colors.white};

  font-weight: bold;
  font-size: 1.6rem;
  line-height: 1.65rem;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  line-clamp: 2;
`;

const SubTitle = styled.h6`
  font-size: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
`;

const IconBox = styled.div`
  display: flex;
`;

const S = {
  Container,
  BookImg,
  InfoBox,
  Title,
  SubTitle,
  Paragraph,
  IconBox,
};

export default S;
