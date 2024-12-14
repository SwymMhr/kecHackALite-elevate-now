import { createLazyFileRoute } from "@tanstack/react-router";
import { Typography, Box, Divider } from "@mui/material";
import { Stack } from "@mui/material";
import { useAuth } from "@/lib/Auth";
export const Route = createLazyFileRoute("/_user/profile")({
  component: RouteComponent,
});

function RouteComponent() {
  const { getUser } = useAuth();
  const user = getUser()[0];
  console.log("Logged In User", getUser());
  return (
    <Box
      sx={{
        marginBottom: "10px",
        borderRadius: "8px",
        border: "1px solid #f0f0f0",
        padding: "10px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Stack
        direction="rows"
        spacing={2}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 0"
        }}
      >
        <Typography variant="h6">Profile</Typography>
        <Typography variant="body1">
          {user.firstname + " " + user.lastname}
        </Typography>
      </Stack>
      <Divider />
      <Stack
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 0"
        }}
        direction="rows"
        spacing={2}
      >
        <Typography variant="h6">Role</Typography>
        <Typography variant="body1">Local Business Owner</Typography>
      </Stack>
      <Divider />
      <Stack
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 0"
        }}
        direction="rows"
        spacing={2}
      >
        <Typography variant="h6">Email</Typography>
        <Typography variant="body1">{user.email}</Typography>
      </Stack>
      <Divider />
      <Stack
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 0",
        }}
        direction="rows"
        spacing={2}
      >
        <Typography variant="h6">Contact</Typography>
        <Typography variant="body1">{user.contact}</Typography>
      </Stack>
    </Box>
  );
}
