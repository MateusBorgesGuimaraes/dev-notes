import { createFileRoute } from "@tanstack/react-router";
import PostEdit from "../../components/pages/PostEdit/postEdit";

export const Route = createFileRoute("/admin/posts/$id/edit")({
  component: PostEdit,
});
