import { useParams } from "@tanstack/react-router";
import { useFetchPostBySlug } from "../../../services/posts/useFetchPostBySlug";
import styles from "./post.module.css";
import { formatPostDate } from "../../../utils/formatPostDate";
import { getReadingTime } from "../../../utils/getReadingTime";
import { MarkdownContent } from "../../ui/MarkdownContent/markdownContent";

export default function Post() {
  const { slug } = useParams({ from: "/posts/$slug" });
  const { data, isFetching, isError } = useFetchPostBySlug(slug);
  if (isError) return <p>Erro ao buscar o post.</p>;
  if (isFetching) return <p>Carregando o post.</p>;
  return (
    <section className={`container`}>
      <div className={styles.headerPost}>
        <span>{data?.tags?.[0]?.name || "no tag"}</span>
        <h1>{data?.title}</h1>
        <p>{data?.excerpt}</p>

        <div className={styles.generalInfos}>
          <p>{data?.author_name}</p>
          <span>·</span>
          <p>{formatPostDate(data?.created_at || "")}</p>
          <span>·</span>
          <p>{getReadingTime(data?.content || "")} min de leitura</p>
        </div>
      </div>

      <div className={styles.preview}>
        <MarkdownContent content={data?.content ?? ""} />
      </div>
    </section>
  );
}
