import { useState } from "react";
import styles from "./posts.module.css";
import {
  POSTS_PER_PAGE,
  useAuthorPosts,
} from "../../../services/posts/useAuthorPosts";
import { PostsTable } from "../../tables/PostsTable/postsTable";
import { Pagination } from "../../ui/Pagination/pagination";

export default function Posts() {
  const [page, setPage] = useState(1);
  const { data: posts, isLoading, isError } = useAuthorPosts(page);

  const hasNextPage = (posts?.length ?? 0) === POSTS_PER_PAGE;

  return (
    <section className={`${styles.postsIndex} container`}>
      <div className={styles.header}>
        <h1>Seus posts</h1>
      </div>

      {isLoading && <p>Carregando posts...</p>}
      {isError && <p>Erro ao carregar posts. Tente novamente.</p>}

      {posts && (
        <>
          <PostsTable posts={posts} />
          <Pagination
            page={page}
            onPageChange={setPage}
            hasNextPage={hasNextPage}
          />
        </>
      )}
    </section>
  );
}
