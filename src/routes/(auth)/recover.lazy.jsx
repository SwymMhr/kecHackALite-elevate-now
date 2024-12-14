import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/(auth)/recover')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /(auth)/recover!'
}
