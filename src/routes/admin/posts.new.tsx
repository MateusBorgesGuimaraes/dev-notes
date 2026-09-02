import { createFileRoute } from "@tanstack/react-router";
import PostNew from "../../components/pages/PostNew/postNew";

export const Route = createFileRoute("/admin/posts/new")({
  component: PostNew,
});
