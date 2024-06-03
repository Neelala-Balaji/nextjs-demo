import { cache } from "react";
import { QueryClient } from "@tanstack/react-query";

const STALE_TIME = 1000 * 60 * 5; // 5 minutes

export const queryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: Infinity, // Data never goes stale
      cacheTime: Infinity, // Data stays in cache indefinitely
      refetchOnWindowFocus: false, // Do not refetch on window focus
      refetchOnReconnect: false, // Do not refetch on reconnect
      refetchOnMount: false, // Do not refetch on component remount
      refetchInterval: false, // Disable periodic refetching
    },
    mutations: {
      onSuccess: (data) => {
        // Optional: handle successful fetch, e.g., update localStorage
        console.log("Data fetched successfully:", data);
      },
      onError: (error) => {
        console.error(error.message);
      },
    },
  },
};

export const getQueryClient = cache(() => new QueryClient(queryClientConfig));
