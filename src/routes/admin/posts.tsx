import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/posts")({
  component: AdminPostsLayout,
});

function AdminPostsLayout() {
  return (
    <div style={{ width: "100%" }} className="container">
      <Outlet />
    </div>
  );
}
