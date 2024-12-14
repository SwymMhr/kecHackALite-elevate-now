import { routeTree } from "./routeTree.gen";
import { createRouter } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// handling query client
const queryClient = new QueryClient();

// handling router
const router = createRouter({
  routeTree,
  context: {
    queryClient,
    authentication:undefined,
  },
});

export { queryClient, router };