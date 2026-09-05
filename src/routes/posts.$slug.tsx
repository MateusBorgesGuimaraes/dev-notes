import { createFileRoute } from "@tanstack/react-router";
import Post from "../components/pages/Post/post";

export const Route = createFileRoute("/posts/$slug")({
  component: Post,
});
