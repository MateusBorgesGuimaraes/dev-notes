import { useConfirm } from "../../../hooks/useConfirm";
import { useDeleteTag } from "../../../services/tags/useDeleteTag";
import { useFetchTags } from "../../../services/tags/useFetchTags";
import { CreateTagForm } from "../../forms/CreateTagForm/createTagForm";
import { ConfirmDialog } from "../../ui/ConfirmDialog/confirmDialog";
import styles from "./tags.module.css";

export const Tags = () => {
  const { data, isError, isLoading } = useFetchTags();
  const { mutate: deleteTag } = useDeleteTag();
  const { isOpen, requestConfirm, handleConfirm, handleCancel } = useConfirm();

  if (isError) return <p>Erro ao carregar tags</p>;
  if (isLoading) return <p>Carregando tags</p>;

  return (
    <section className={styles.tags}>
      <h1>Tags</h1>
      <p>Crie e gerencie as tags disponíveis para seus posts.</p>
      <div>
        <CreateTagForm />
        <span className={styles.desc}>
          O slug é gerado automaticamente a partir do nome.
        </span>
      </div>

      {data && data.length > 0 ? (
        <ul className={styles.tagList}>
          {data.map((tag) => (
            <li key={tag.id}>
              {tag.name}{" "}
              <button onClick={() => requestConfirm(() => deleteTag(tag.id))}>
                Excluir
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma tag</p>
      )}
      <ConfirmDialog
        open={isOpen}
        title="Excluir tag"
        message={`Tem certeza que quer excluir a tag ?`}
        confirmText="Excluir"
        variant="danger"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </section>
  );
};
