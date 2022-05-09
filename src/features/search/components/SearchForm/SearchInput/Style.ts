import styled from "styled-components";
import {
  SearchIcon as HiSearchIcon,
  XCircleIcon as HiXCircleIcon,
} from "@heroicons/react/solid";

const Container = styled.div`
  flex-grow: 1;
  align-items: center;

  display: flex;

  border-radius: 5px;
  padding: 0.7rem 1rem;

  background-color: ${({ theme }) => theme.colors.gray[700]};
`;

const Input = styled.input`
  all: unset;

  flex-grow: 1;

  padding-top: 2px;

  background-color: inherit;

  color: ${({ theme }) => theme.colors.white};
  ::placeholder {
    color: ${({ theme }) => theme.colors.gray[600]};
  }
`;

const SearchIcon = styled(HiSearchIcon)`
  width: 2rem;
  height: 2rem;
  margin-right: 7px;

  color: ${({ theme }) => theme.colors.gray[600]};
`;

const XCircleIcon = styled(HiXCircleIcon)`
  width: 2rem;
  height: 2rem;

  color: ${({ theme }) => theme.colors.gray["500"]};
`;

const Button = styled.button`
  all: unset;

  width: 2rem;
  height: 2rem;

  cursor: pointer;

  :focus-visible {
    outline: blue auto 2px;
    outline: -webkit-focus-ring-color auto 1px;
  }
`;

const S = {
  Container,
  Input,
  SearchIcon,
  Button,
  XCircleIcon,
};
export default S;
