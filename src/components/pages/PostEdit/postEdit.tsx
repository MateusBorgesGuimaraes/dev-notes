import { useParams } from "@tanstack/react-router";
import { useFetchPostById } from "../../../services/posts/useFetchPostById";
import { PostForm } from "../../forms/PostForm/postForm";
import styles from "./postEdit.module.css";

export default function PostEdit() {
  const { id } = useParams({ from: "/admin/posts/$id/edit" });
  const postId = Number(id);

  const { data: post, isLoading, isError } = useFetchPostById(postId);

  if (isLoading) return <p>Carregando post...</p>;
  if (isError || !post) return <p>Erro ao carregar o post.</p>;

  return (
    <section className={`${styles.postEdit} container`}>
      <h1>Editar post</h1>
      <PostForm
        mode="edit"
        postId={postId}
        defaultValues={{
          title: post.title,
          content: post.content ?? "",
          excerpt: post.excerpt ?? "",
          cover_image_url: post.cover_image_url ?? "",
        }}
      />
    </section>
  );
}
