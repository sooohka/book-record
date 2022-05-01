import React, { ReactNode } from "react";
import RecoilProvider from "./Recoil";
import RouterProvider from "./Router";
import StyleProvider from "./Style";

function AppProvider({ children }: { children: ReactNode }) {
  return (
    <RecoilProvider>
      <StyleProvider>
        <RouterProvider>{children}</RouterProvider>
      </StyleProvider>
    </RecoilProvider>
  );
}

export default AppProvider;
