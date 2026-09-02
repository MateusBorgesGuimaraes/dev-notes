import { useMutation } from "@tanstack/react-query";
import { uploadImage } from "./uploadImage";

export function useUploadImage() {
  return useMutation({
    mutationFn: uploadImage,
  });
}
