import React, { ReactNode } from "react";
import RouterProvider from "./Router";
import StateManagementProvider from "./StateManagement";
import StyleProvider from "./Style";

function AppProvider({ children }: { children: ReactNode }) {
  return (
    <StateManagementProvider>
      <StyleProvider>
        <RouterProvider>{children}</RouterProvider>
      </StyleProvider>
    </StateManagementProvider>
  );
}

export default AppProvider;
