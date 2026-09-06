import { useState } from "react";
import { PostCard } from "../../ui/PostCard/postCard";
import { PostList } from "../../ui/PostList/postList";
import styles from "./home.module.css";
import { ViewToggle } from "../../ui/ViewToggle/viewToggle";
import {
  useFetchPosts,
  POSTS_PER_PAGE,
} from "../../../services/posts/useFetchPosts";
import { Pagination } from "../../ui/Pagination/pagination";
import { formatPostDate } from "../../../utils/formatPostDate";

export default function Home() {
  const [viewFormat, setViewFormat] = useState<"list" | "card">("list");
  const [page, setPage] = useState(1);
  const { data: posts, isLoading, isError } = useFetchPosts(page);

  console.log(posts);

  const hasNextPage = (posts?.length ?? 0) === POSTS_PER_PAGE;

  return (
    <section className={`container ${styles.home}`}>
      {isLoading && <p>Carregando posts...</p>}
      {isError && <p>Erro ao carregar posts. Tente novamente.</p>}
      <div className={styles.buttonToggle}>
        <ViewToggle onChange={setViewFormat} value={viewFormat} />
      </div>
      {viewFormat === "list" ? (
        <section className={`${styles.homeList}`}>
          {(posts ?? []).map((p, i) => (
            <PostList
              key={p.id}
              created={formatPostDate(p.created_at)}
              tag={p.tags?.[0]?.name || "no tag"}
              title={p.title}
              excerpt={p.excerpt}
              slug={p.slug}
              first={i === 0}
            />
          ))}
        </section>
      ) : (
        <section className={`${styles.homeCard}`}>
          {(posts ?? []).map((p, i) => (
            <PostCard
              key={p.id}
              created={formatPostDate(p.created_at)}
              tag={p.tags?.[0]?.name || "no tag"}
              title={p.title}
              excerpt={p.excerpt}
              slug={p.slug}
              first={i === 0}
              imageUrl={p.cover_image_url || "/default-image.jpg"}
            />
          ))}
        </section>
      )}
      <Pagination
        page={page}
        onPageChange={setPage}
        hasNextPage={hasNextPage}
      />
    </section>
  );
}
