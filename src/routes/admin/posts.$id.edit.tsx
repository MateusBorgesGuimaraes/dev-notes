import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/posts/$id/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/posts/$id/edit"!</div>
}
