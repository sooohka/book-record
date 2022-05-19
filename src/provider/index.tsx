import QueryClientProvider from "provider/QueryClientProvider";
import React, { ReactNode } from "react";
import RecoilProvider from "./RecoilProvider";
import RouterProvider from "./Router";
import StyleProvider from "./Style";

function AppProvider({ children }: { children: ReactNode }) {
  return (
    <RecoilProvider>
      <QueryClientProvider>
        <StyleProvider>
          <RouterProvider>{children}</RouterProvider>
        </StyleProvider>
      </QueryClientProvider>
    </RecoilProvider>
  );
}

export default AppProvider;
