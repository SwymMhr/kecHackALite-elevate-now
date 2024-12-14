import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/router")({
  beforeLoad: ({ context }) => {
      if(context.authentication !== undefined && !context.authentication.isAuthenticated){
            throw redirect("/(auth)/login");
      }
  },
  loader: ({ context }) => {
    console.log(context.authentication.isAuthenticated);
  },
  component: RouteComponent,
});

function RouteComponent() {

  return <Outlet />;
}
