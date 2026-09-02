import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/$slug')({
  component: PostPage,
})

function PostPage() {
  const { slug } = Route.useParams()
  return <h1>Post: {slug}</h1>
}
