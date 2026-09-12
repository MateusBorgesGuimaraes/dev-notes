import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../formComponents/Input/input";
import { Button } from "../../formComponents/Button/button";
import styles from "./createTagForm.module.css";
import { tagSchema, type TagSchema } from "../../../services/tags/tag.schema";
import { useCreateTag } from "../../../services/tags/useCreateTag";

export const CreateTagForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TagSchema>({
    resolver: zodResolver(tagSchema),
  });

  const { mutate, isPending } = useCreateTag();

  const onSubmit = (data: TagSchema) => {
    mutate(data);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={styles.createTag}
    >
      <Input
        placeholder="Nome da tag (ex; Kubernetes)"
        type="text"
        requerid
        error={errors.name?.message}
        {...register("name")}
      />

      <div className={styles.button}>
        <Button type="submit" variant="primary" size="sm" disabled={isPending}>
          {isPending ? "Salvando..." : "+ Criar tag"}
        </Button>
      </div>
    </form>
  );
};
