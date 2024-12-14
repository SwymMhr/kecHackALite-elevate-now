import * as React from "react";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import Navbar from "@/Layouts/Navbar";
import Footer from "@/Layouts/Footer";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { SnackbarProvider } from "notistack";
import { Box } from "@mui/material";
import { CircularProgress } from "@mui/material";
export const Route = createRootRouteWithContext()({
  component: RootComponent,
  pendingComponent: () => (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  ),
});

function RootComponent() {
  return (
    <React.Fragment>
        <SnackbarProvider>
          <Navbar />
          <Box>
            <Outlet />
          </Box>
          <Footer />
        </SnackbarProvider>
      <TanStackRouterDevtools />
      <ReactQueryDevtools/>
    </React.Fragment>
  );
}
