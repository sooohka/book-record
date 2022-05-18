import { QueryClient } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: Infinity, cacheTime: Infinity, retry: 0 },
  },
});

export default queryClient;
