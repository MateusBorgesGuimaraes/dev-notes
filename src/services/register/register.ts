import type { RegisterSchema } from "../../components/pages/Register/register.schema";
import { api } from "../api";

export async function register(data: RegisterSchema) {
  const response = await api.post("/auth/register", data);
  return response.data;
}
