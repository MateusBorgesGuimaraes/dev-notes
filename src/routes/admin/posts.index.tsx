import { createFileRoute } from "@tanstack/react-router";
import Posts from "../../components/pages/Posts/posts";

export const Route = createFileRoute("/admin/posts/")({
  component: Posts,
});
