import { createFileRoute } from "@tanstack/react-router";
import Home from "../components/pages/Home/home";

export const Route = createFileRoute("/")({
  component: Home,
});
