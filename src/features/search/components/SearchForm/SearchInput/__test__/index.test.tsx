import userEvent from "@testing-library/user-event";
import React from "react";
import SearchInput from "..";
import { render, screen } from "../../../../../../__test__/test-utils";
import {
  SearchContextProvider,
  SearchContextType,
} from "../../../../context/SearchContext";

describe("SearchInput test", () => {
  const initValue: SearchContextType = {
    clearInput: jest.fn(),
    input: "",
    query: "",
    searchBookList: jest.fn(),
    setInput: jest.fn(),
    setQuery: jest.fn(),
    searchedWordList: [],
  };
  let value: SearchContextType;

  beforeEach(() => {
    value = { ...initValue };
  });

  it("renders input correctly", () => {
    render(
      <SearchContextProvider {...value}>
        <SearchInput />
      </SearchContextProvider>
    );

    const input = screen.getByPlaceholderText("검색");
    const xCircle = screen.getByLabelText("reset input text");
    expect(input).toBeInTheDocument();
    expect(xCircle).not.toBeVisible();
  });

  it("when user type setInput gets called", () => {
    render(
      <SearchContextProvider {...value}>
        <SearchInput />
      </SearchContextProvider>
    );
    const input = screen.getByPlaceholderText("검색");

    userEvent.type(input, "hello");
    expect(value.setInput).toBeCalledTimes(5);
  });

  it("should not render xCircle when has input value", () => {
    value.input = "hi";
    render(
      <SearchContextProvider {...value}>
        <SearchInput />
      </SearchContextProvider>
    );
    const input = screen.getByPlaceholderText("검색");
    const xCircle = screen.getByLabelText("reset input text");
    expect(input).toBeInTheDocument();
    expect(xCircle).toBeVisible();
  });

  it("when xCircle button Clicked clearInput gets called", () => {
    value.input = "hi";
    render(
      <SearchContextProvider {...value}>
        <SearchInput />
      </SearchContextProvider>
    );
    const xCircle = screen.getByLabelText("reset input text");

    userEvent.click(xCircle);

    expect(value.clearInput).toBeCalledTimes(1);
  });
});
