import { api } from "../api";

type UploadResponse = {
  url: string;
};

export async function uploadImage(file: File): Promise<UploadResponse> {
  const formData = new FormData();
  formData.append("image", file);

  const { data } = await api.post<UploadResponse>("/admin/uploads", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return data;
}
