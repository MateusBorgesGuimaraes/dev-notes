import { useState } from "react";
import { PostCard } from "../../ui/PostCard/postCard";
import { PostList } from "../../ui/PostList/postList";
import styles from "./home.module.css";
import { ViewToggle } from "../../ui/ViewToggle/viewToggle";

export default function Home() {
  const [viewFormat, setViewFormat] = useState<"list" | "card">("list");
  return (
    <section className={`container ${styles.home}`}>
      <div className={styles.buttonToggle}>
        <ViewToggle onChange={setViewFormat} value={viewFormat} />
      </div>
      {viewFormat === "list" ? (
        <section className={`${styles.homeList}`}>
          <PostList
            created="25 ago 2025"
            tag="Go"
            title="Como configurar Postgres no Windows"
            excerpt="Guia passo a passo de instalação sem precisar do Docker."
            slug="como-configurar-postgress-no-windows"
            first
          />

          <PostList
            created="25 ago 2025"
            tag="Go"
            title="Como configurar Postgres no Windows"
            excerpt="Guia passo a passo de instalação sem precisar do Docker."
            slug="como-configurar-postgress-no-windows"
          />

          <PostList
            created="25 ago 2025"
            tag="Go"
            title="Como configurar Postgres no Windows"
            excerpt="Guia passo a passo de instalação sem precisar do Docker."
            slug="como-configurar-postgress-no-windows"
          />

          <PostList
            created="25 ago 2025"
            tag="Go"
            title="Como configurar Postgres no Windows"
            excerpt="Guia passo a passo de instalação sem precisar do Docker."
            slug="como-configurar-postgress-no-windows"
          />
        </section>
      ) : (
        <section className={`${styles.homeCard}`}>
          <PostCard
            imageUrl="./sql-code.jpg"
            created="25 ago 2025"
            tag="Go"
            title="Como configurar Postgres no Windows"
            excerpt="Guia passo a passo de instalação sem precisar do Docker."
            slug="como-configurar-postgress-no-windows"
          />
          <PostCard
            imageUrl="./sql-code.jpg"
            created="25 ago 2025"
            tag="Go"
            title="Como configurar Postgres no Windows"
            excerpt="Guia passo a passo de instalação sem precisar do Docker."
            slug="como-configurar-postgress-no-windows"
          />
          <PostCard
            imageUrl="./sql-code.jpg"
            created="25 ago 2025"
            tag="Go"
            title="Como configurar Postgres no Windows"
            excerpt="Guia passo a passo de instalação sem precisar do Docker."
            slug="como-configurar-postgress-no-windows"
          />
          <PostCard
            imageUrl="./sql-code.jpg"
            created="25 ago 2025"
            tag="Go"
            title="Como configurar Postgres no Windows"
            excerpt="Guia passo a passo de instalação sem precisar do Docker."
            slug="como-configurar-postgress-no-windows"
          />
        </section>
      )}
    </section>
  );
}
