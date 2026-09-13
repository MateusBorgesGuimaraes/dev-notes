import { useEffect } from "react";
import styles from "./tagsModal.module.css";
import { useFetchTags } from "../../../services/tags/useFetchTags";
import { useAddTagToPost } from "../../../services/tags/useAddTagToPost";
import { useRemoveTagFromPost } from "../../../services/tags/useRemoveTagFromPost";
import { useFetchPostTags } from "../../../services/tags/useFetchPostTags";

type TagsModalProps = {
  open: boolean;
  postId: number;
  onClose: () => void;
};

export function TagsModal({ open, postId, onClose }: TagsModalProps) {
  const { data: allTags } = useFetchTags();
  const {
    data: postTags,
    isLoading,
    isError,
  } = useFetchPostTags(postId, { enabled: open });

  const { mutate: addTag, isPending: isAdding } = useAddTagToPost(postId);
  const { mutate: removeTag } = useRemoveTagFromPost(postId);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const postTagIds = new Set((postTags ?? []).map((t) => t.id));
  const availableTags = (allTags ?? []).filter((t) => !postTagIds.has(t.id));

  const handleAdd = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const tagId = Number(e.target.value);
    if (tagId) addTag(tagId);
    e.target.value = "";
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="tags-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <h2 id="tags-modal-title" className={styles.title}>
            Tags do post
          </h2>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Fechar"
          >
            &times;
          </button>
        </div>

        <p className={styles.hint}>
          A primeira tag da lista é a principal do post.
        </p>

        {isLoading && <p className={styles.loading}>Carregando tags...</p>}
        {isError && (
          <p className={styles.error}>Erro ao carregar as tags do post.</p>
        )}

        {!isLoading && !isError && (
          <div className={styles.tagsList}>
            {(postTags ?? []).length === 0 ? (
              <span className={styles.empty}>Nenhuma tag associada ainda.</span>
            ) : (
              postTags!.map((tag, index) => (
                <span
                  key={tag.id}
                  className={`${styles.badge} ${index === 0 ? styles.badgePrimary : ""}`}
                >
                  {index === 0 && (
                    <span className={styles.primaryDot} aria-hidden="true" />
                  )}
                  {tag.name}
                  <button
                    type="button"
                    className={styles.removeButton}
                    onClick={() => removeTag(tag.id)}
                    aria-label={`Remover tag ${tag.name}`}
                  >
                    &times;
                  </button>
                </span>
              ))
            )}
          </div>
        )}

        <div className={styles.addRow}>
          <select
            className={styles.select}
            onChange={handleAdd}
            disabled={isAdding || availableTags.length === 0}
            defaultValue=""
          >
            <option value="" disabled>
              {availableTags.length === 0
                ? "Todas as tags já foram adicionadas"
                : "Selecione uma tag..."}
            </option>
            {availableTags.map((tag) => (
              <option key={tag.id} value={tag.id}>
                {tag.name}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.actions}>
          <button type="button" className={styles.doneButton} onClick={onClose}>
            Concluído
          </button>
        </div>
      </div>
    </div>
  );
}
