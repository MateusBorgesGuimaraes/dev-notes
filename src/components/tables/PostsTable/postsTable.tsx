import { Link } from "@tanstack/react-router";
import type { Post } from "../../../types/post";
import { useDeletePost } from "../../../services/posts/useDeletePost";
import { usePublishPost } from "../../../services/posts/usePublishPost";
import styles from "./postsTable.module.css";

interface PostsTableProps {
  posts: Post[];
}

const statusLabel: Record<Post["status"], string> = {
  draft: "Rascunho",
  published: "Publicado",
  archived: "Arquivado",
};

export function PostsTable({ posts }: PostsTableProps) {
  const { mutate: deletePost, isPending: isDeleting } = useDeletePost();
  const { mutate: publish, isPending: isPublishing } = usePublishPost();

  const handleDelete = (id: number, title: string) => {
    const confirmed = window.confirm(
      `Excluir o post "${title}"? Essa ação não pode ser desfeita.`,
    );
    if (confirmed) {
      deletePost(id);
    }
  };

  if (posts.length === 0) {
    return <p className={styles.empty}>Você ainda não criou nenhum post.</p>;
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Título</th>
          <th>Status</th>
          <th>Data</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td className={styles.title}>{post.title}</td>
            <td>
              <span className={`${styles.badge} ${styles[post.status]}`}>
                {statusLabel[post.status]}
              </span>
            </td>
            <td className={styles.date}>
              {new Date(post.created_at).toLocaleDateString("pt-BR")}
            </td>
            <td className={styles.actions}>
              <Link
                to="/admin/posts/$id/edit"
                params={{ id: String(post.id) }}
                className={styles.link}
              >
                Editar
              </Link>

              {post.status === "draft" && (
                <button
                  type="button"
                  className={styles.linkButton}
                  onClick={() => publish(post.id)}
                  disabled={isPublishing}
                >
                  Publicar
                </button>
              )}

              <button
                type="button"
                className={styles.linkButtonDanger}
                onClick={() => handleDelete(post.id, post.title)}
                disabled={isDeleting}
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
