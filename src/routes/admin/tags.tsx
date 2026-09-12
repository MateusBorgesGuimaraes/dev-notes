import { createFileRoute } from "@tanstack/react-router";
import { Tags } from "../../components/pages/Tags/tags";

export const Route = createFileRoute("/admin/tags")({
  component: Tags,
});
