import React, { createContext, ReactNode } from "react";

type ContextType = {
  books: Book[];
};
const Context = createContext<ContextType>({ books: [] });

type Props = {
  children: ReactNode;
  value: ContextType;
};

function ContextProvider({ children, value }: Props) {
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export type { ContextType };
export { ContextProvider };
export default Context;
