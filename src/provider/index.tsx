import { ReactNode } from "react";

import QueryClientProvider from "provider/QueryClientProvider";
import RecoilProvider from "provider/RecoilProvider";
import RouterProvider from "provider/Router";
import StyleProvider from "provider/Style";

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
