import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Header } from "../components/shared/Header/header";
import { Toaster } from "sonner";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <div className={"layout"}>
      <Header />

      <main className={"content"}>
        <Outlet />
      </main>

      <Toaster position="top-right" />
    </div>
  );
}
