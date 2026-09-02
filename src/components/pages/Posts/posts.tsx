import { ButtonLink } from "../../ui/ButtonLink/buttonLink";
import styles from "./posts.module.css";

export default function Posts() {
  return (
    <section className={`${styles.posts} container`}>
      <div className={styles.header}>
        <h2>Administre os seus post</h2>
        <div>
          <ButtonLink text="Novo post" link="/admin/posts/new" />
        </div>
      </div>
    </section>
  );
}
