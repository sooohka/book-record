import QueryClientProvider from "provider/QueryClientProvider";
import React, { ReactNode } from "react";
import RouterProvider from "./Router";
import StateManagementProvider from "./StateManagement";
import StyleProvider from "./Style";

function AppProvider({ children }: { children: ReactNode }) {
  return (
    <StateManagementProvider>
      <QueryClientProvider>
        <StyleProvider>
          <RouterProvider>{children}</RouterProvider>
        </StyleProvider>
      </QueryClientProvider>
    </StateManagementProvider>
  );
}

export default AppProvider;
