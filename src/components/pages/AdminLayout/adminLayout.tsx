import { Outlet, Link } from "@tanstack/react-router";
import styles from "./adminLayout.module.css";
import {
  ListIcon,
  ListPlusIcon,
  MessageSquareTextIcon,
  TagsIcon,
} from "lucide-react";

export default function AdminLayout() {
  return (
    <div className={`container ${styles.adminLayout}`}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link
            to="/admin/posts"
            className={styles.navLink}
            activeProps={{ className: styles.navLinkActive }}
            activeOptions={{ exact: true }}
            data-tooltip="Ver posts"
            aria-label="Ver posts"
          >
            <ListIcon width={20} height={20} />
          </Link>
          <Link
            to="/admin/posts/new"
            className={styles.navLink}
            activeProps={{ className: styles.navLinkActive }}
            data-tooltip="Criar post"
            aria-label="Criar post"
          >
            <ListPlusIcon width={20} height={20} />
          </Link>
          <Link
            to="/admin/tags"
            className={styles.navLink}
            activeProps={{ className: styles.navLinkActive }}
            data-tooltip="Tags"
            aria-label="Tags"
          >
            <TagsIcon width={20} height={20} />
          </Link>
          <Link
            to="/admin/comments"
            className={styles.navLink}
            activeProps={{ className: styles.navLinkActive }}
            data-tooltip="Comentários"
            aria-label="Comentários"
          >
            <MessageSquareTextIcon width={20} height={20} />
          </Link>
        </nav>
      </header>

      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}
