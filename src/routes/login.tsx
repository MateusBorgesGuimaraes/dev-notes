import { createFileRoute } from "@tanstack/react-router";
import Login from "../components/pages/Login/login";

export const Route = createFileRoute("/login")({
  component: Login,
});
