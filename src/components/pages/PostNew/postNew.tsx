import { PostForm } from "../../forms/PostForm/postForm";
import styles from "./postNew.module.css";

export default function PostNew() {
  return (
    <section className={`${styles.postNew} container`}>
      <h1>Novo post</h1>
      <PostForm mode="create" />
    </section>
  );
}
