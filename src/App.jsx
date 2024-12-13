import React from "react";
import { RouterProvider } from "@tanstack/react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { router, queryClient } from "./router";
import { useAuth } from "@/lib/Auth";

const App = () => {
  const authentication = useAuth();
  
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} context={{authentication}} />
      </QueryClientProvider>
    </React.Fragment>
  );
};

export default App;
