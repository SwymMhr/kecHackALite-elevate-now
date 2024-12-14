import { Container, Stack, Typography, Chip, Divider, Box } from "@mui/material";
import { CircularProgress } from "@mui/material";
import {
  createFileRoute,
  Link,
  Outlet,
  redirect,
} from "@tanstack/react-router";

export const Route = createFileRoute("/_user")({
  beforeLoad: ({ context }) => {
    if (
      context.authentication == undefined ||
      !context.authentication.isAuthenticated
    ) {
      throw redirect({
        to: "/",
      });
    }
  },
  component: RouteComponent,
  pendingComponent: () => (
    <Box
      sx={{
        width: "100%",
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  ) 
});

function RouteComponent() {
  const userAccessList = [
    {
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      name: "Profile",
      link: "/profile",
    },
    {
      name: "Create",
      link: "/create",
    },
  ];
  const userServiceList = [
    {
      name: "Local Business Owner",
      link: "/lbo",
      KeyWord: "lbo",
    },
    {
      name: "Consultant",
      link: "/consultant",
      KeyWord: "consultant",
    },
    {
      name: "Training",
      link: "/training",
      KeyWord: "training",
    },
  ];
  return (
    <Container
      sx={{
        padding: "30px 0",
      }}
    >
      <Stack
        spacing={2}
        direction="row"
        sx={{
          marginBottom: "10px",
          borderRadius: "8px",
          border: "1px solid #f0f0f0",
          padding: "10px",
        }}
      >
        <Typography variant="h6">User Access</Typography>
        {Array.from(userAccessList).map((item, index) => (
          <Link
            to={item.link}
            key={index}
            activeProps={{
              sx: {
                backgroundColor: "none",
                color: "black",
                borderColor: "black",
              },
            }}
          >
            <Chip label={item.name} variant="outlined" />
          </Link>
        ))}
        <Divider orientation="vertical" flexItem />
        {Array.from(userServiceList).map((item, index) => (
          <Link
            to={item.link}
            key={index}
            activeProps={{
              sx: {
                backgroundColor: "none",
                color: "black",
                borderColor: "black",
              },
            }}
          >
            <Chip label={item.name} variant="outlined" />
          </Link>
        ))}
      </Stack>
      <Outlet />
    </Container>
  );
}
